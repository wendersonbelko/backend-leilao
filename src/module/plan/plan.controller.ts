import { Request, Response } from "express";
import { PlanService } from "./plan.service";
import { HttpStatusClientError, HttpStatusSuccess } from "../../enum/HttpStatusCodes.enum";
import { Result } from "../../handler/response";
import { createPlan } from "../../validator/plan.validator";
import { idValidator } from "../../validator";

class PlanController {
  planService: PlanService

  constructor() {
    this.planService = new PlanService();
  }

  public create = async (req: Request, res: Response) => {
    const payload = createPlan.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.planService.createPlan(payload.data);

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public get = async (req: Request, res: Response) => {
    const result = await this.planService.getPlans();

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public getById = async (req: Request, res: Response) => {
    const payload = idValidator.safeParse(req.params.id);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.planService.getPlanById(Number(payload.data.id));

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public update = async (req: Request, res: Response) => {
    const payload = createPlan.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const id = idValidator.safeParse(req.params.id);

    if (id.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        id.error.issues[0].message,
        res
      );
    }

    const result = await this.planService.updatePlan({ ...payload.data, id: id.data.id });

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public delete = async (req: Request, res: Response) => {
    const id = idValidator.safeParse(req.params.id);

    if (id.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        id.error.issues[0].message,
        res
      );
    }

    const result = await this.planService.deletePlan(Number(id.data.id));

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }
}

export const planController = new PlanController();
