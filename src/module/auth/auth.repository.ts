import { PrismaClient } from "@prisma/client";

export class AuthRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  
  public createUser = async (auth0User: any) => {
    const user = await this.prisma.user.create({
      data: {
        id_auth0: auth0User.data.user_id,
        name: auth0User.name,
        nickname: auth0User.nickname,
        username: auth0User.username,
        email: auth0User.email,
        email_verified: auth0User.email_verified,
        picture: auth0User.picture,
      }
    });

    return user;
  }
}