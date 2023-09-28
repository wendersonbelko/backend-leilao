import jwt from "jsonwebtoken";
import { apiConnectionAuth0 } from "../../config/axios";
import { environment } from "../../config/environment";
import { AuthRepository } from "./auth.repository";
import { IUserLogin, IUserRegister } from "../../validator/user.validator";

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  public connectAuth0 = async (payload: IUserLogin) => {
    const token = await apiConnectionAuth0().post('/oauth/token', {
      grant_type: 'password',
      client_id: environment.AUTH0_CLIENT_ID,
      client_secret: environment.AUTH0_SECRET_KEY,
      username: payload.username,
      password: payload.password,
      scope: 'openid email',
      connection: 'Username-Password-Authentication',
    });

    return token;
  }

  public generateTokenJWT = (token: any) => {
    const jwtToken = jwt.sign({
      id: token.data.id_token,
      email: token.data.email,
    }, environment.JWT_SECRET!, {
      expiresIn: '1h',
    });

    return jwtToken;
  };

  public createAccount = async (payload: IUserRegister) => {
    const auth0User: any = await apiConnectionAuth0().post('/api/v2/users', {
      email: payload.email,
      name: payload.name,
      username: payload.username,
      password: payload.password,
      connection: 'Username-Password-Authentication'
    }).then((response) => {
      return response.data;
    }).catch((error) => {
      return {
        error: true,
        code: error.response.data.statusCode,
        user: null,
      };
    });

    if (auth0User.error) {
      return auth0User.code;
    }

    const user = await this.authRepository.createUser(auth0User);

    return {
      error: false,
      code: null,
      user: user,
    };
  }
}