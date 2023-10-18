import { Request, Response } from "express";
import { HttpStatusClientError, HttpStatusSuccess } from "../../enum/HttpStatusCodes.enum";
import { Result } from "../../handler/response";
import { createRole } from "../../validator/role.validator";
import { RoleService } from "./role.service";
import { idValidator } from "../../validator";

class RoleController {
  roleService: RoleService

  constructor() {
    this.roleService = new RoleService();
  }

  public create = async (req: Request, res: Response) => {
    const payload = createRole.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.roleService.createRole(payload.data);

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public get = async (req: Request, res: Response) => {
    const payload = idValidator.safeParse(req.params);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.roleService.getRole(payload.data.id);

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public update = async (req: Request, res: Response) => {
    const id = idValidator.safeParse(req.params);

    if (id.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        id.error.issues[0].message,
        res
      );
    }

    const payload = createRole.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.roleService.updateRole({ ...payload.data, id: id.data.id });

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public delete = async (req: Request, res: Response) => {
    const payload = idValidator.safeParse(req.params);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.roleService.deleteRole(payload.data.id);

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.roleService.listRole();

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }
}

export const roleController = new RoleController();
