import { Plan } from "@prisma/client";
import { PlanRepository } from "./plan.repository";

export class PlanService {
  planRepository: PlanRepository

  constructor() {
    this.planRepository = new PlanRepository();
  }

  async createPlan(data: Partial<Plan>) {
    return await this.planRepository.createPlan(data);
  }

  async getPlanById(id: number) {
    return await this.planRepository.getPlanById(id);
  }

  async getPlans() {
    return await this.planRepository.getPlans();
  }

  async updatePlan(data: Partial<Plan>) {
    return await this.planRepository.updatePlan(data);
  }

  async deletePlan(id: number) {
    return await this.planRepository.deletePlan(id);
  }
}