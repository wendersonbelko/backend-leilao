import { Plan, PrismaClient } from "@prisma/client";

export class PlanRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createPlan(data: Partial<Plan>) {
    return await this.prisma.plan.create({
      data: {
        days: data.days!,
        name: data.name!,
        price: data.price!,
      }
    });
  }

  async getPlanById(id: number) {
    return await this.prisma.plan.findUnique({
      where: {
        id,
      },
    });
  }

  async getPlans() {
    return await this.prisma.plan.findMany();
  }

  async updatePlan(data: Partial<Plan>) {
    return await this.prisma.plan.update({
      where: {
        id: data.id,
      },
      data: {
        days: data.days!,
        name: data.name!,
        price: data.price!,
      }
    });
  }

  async deletePlan(id: number) {
    return await this.prisma.plan.delete({
      where: {
        id,
      },
    });
  }
}