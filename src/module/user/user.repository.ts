import { PrismaClient } from '@prisma/client'

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async FindOrCreate(payload: User.User) {
    const findedUser = await this.prisma.user.findUnique({
      where: {
        email: payload.email
      }
    })

    if (findedUser) {
      return findedUser
    }

    const createdUser = this.prisma.user.create({
      data: {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        email_verified: payload.email_verified,
        locale: payload.locale,
        picture: payload.picture
      }
    })

    return createdUser
  }
}