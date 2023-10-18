import { PrismaClient, Role } from "@prisma/client";

export class RoleRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public createRole(payload: Partial<Role>) {
    return this.prisma.role.create({
      data: {
        name: payload.name!,
        description: payload.description!,
      },
    });
  }

  public getRole(id: number) {
    return this.prisma.role.findUnique({
      where: {
        id,
      },
    });
  }

  public updateRole(payload: Partial<Role>) {
    return this.prisma.role.update({
      where: {
        id: payload.id,
      },
      data: payload,
    });
  }

  public deleteRole(id: number) {
    return this.prisma.role.delete({
      where: {
        id,
      },
    });
  }

  public listRole() {
    return this.prisma.role.findMany();
  }
}