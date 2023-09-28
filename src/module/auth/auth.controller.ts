import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { Result } from "../../handler/response";
import { HttpStatusClientError, HttpStatusSuccess } from "../../enum/HttpStatusCodes.enum";
import { userLogin, userRegister } from "../../validator/user.validator";

class AuthController  {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public login = async (req: Request, res: Response) => {
    const payload = userLogin.parse(req.body);
    const tokenAuth0 = await this.authService.connectAuth0(payload);

    if (!tokenAuth0) {
      return new Result().handler(
        "ERROR",
        HttpStatusClientError.Unauthorized,
        "Usuário ou senha inválidos",
        res
      );
    }

    const token = this.authService.generateTokenJWT(tokenAuth0);

    res.setHeader('Authorization', `Bearer ${token}`);

    return new Result().handler(
      "SUCCESS",
      HttpStatusSuccess.OK,
      token,
      res
    );
  };

  public register = async (req: Request, res: Response) => {
    const payload = userRegister.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const user = await this.authService.createAccount(payload.data);

    if(user === 400) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        'Erro ao criar usuário',
        res
      );
    }

    if(user === 401) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.Unauthorized,
        'Sem conexão com o serviço de autenticação',
        res
      );
    };

    if(user === 409) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.Conflict,
        'Usuário já existe',
        res
      );
    }

    if (user === 429) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.TooManyRequests,
        'Limite de requisições excedido',
        res
      );
    }

    return new Result().handler(
      "SUCCESS",
      HttpStatusSuccess.Created,
      user,
      res
    );
  };
}

export const authController = new AuthController();
