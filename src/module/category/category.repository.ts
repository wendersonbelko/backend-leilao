import { PrismaClient, Category } from "@prisma/client";

export class CategoryRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public createCategory(payload: Partial<Category>) {
    return this.prisma.category.create({
      data: {
        name: payload.name!,
      },
    });
  }

  public getCategory(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  public updateCategory(payload: Partial<Category>) {
    return this.prisma.category.update({
      where: {
        id: payload.id,
      },
      data: payload,
    });
  }

  public deleteCategory(id: number) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }

  public listCategory() {
    return this.prisma.category.findMany();
  }
}