import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import { createCategory } from "../../validator/category.validator";
import { Result } from "../../handler/response";
import { HttpStatusClientError, HttpStatusSuccess } from "../../enum/HttpStatusCodes.enum";
import { idValidator } from "../../validator";

class CategoryController {
  categoryService: CategoryService

  constructor() {
    this.categoryService = new CategoryService();
  }

  public create = async (req: Request, res: Response) => {
    const payload = createCategory.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.categoryService.createCategory(payload.data);

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

    const result = await this.categoryService.getCategory(payload.data.id);

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

    const payload = createCategory.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.categoryService.updateCategory({ ...payload.data, id: id.data.id });

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

    await this.categoryService.deleteCategory(payload.data.id);

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      null,
      res
    )
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.categoryService.listCategory();

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }
}

export const categoryController = new CategoryController();
