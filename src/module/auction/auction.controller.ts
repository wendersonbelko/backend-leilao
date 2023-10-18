import { Request, Response } from "express";
import { AuctionService } from "./auction.service";
import { createAuction } from "../../validator/auction.validator";
import { HttpStatusClientError, HttpStatusSuccess } from "../../enum/HttpStatusCodes.enum";
import { Result } from "../../handler/response";
import { idValidator } from "../../validator";

class AuctionController {
  auctionService: AuctionService

  constructor() {
    this.auctionService = new AuctionService();
  }

  public create = async (req: Request, res: Response) => {
    const payload = createAuction.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }


    const userId = req.user?.id;

    const result = this.auctionService.createAuction({ ...payload.data, user_id: userId! });

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

    const result = await this.auctionService.getAuction(Number(payload.data.id));

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public update = async (req: Request, res: Response) => {
    const id = idValidator.safeParse(req.params);
    const payload = createAuction.safeParse(req.body);

    if (id.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        id.error.issues[0].message,
        res
      );
    }

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.auctionService.updateAuction({ ...payload.data, id: Number(id.data.id) });
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

    console.log(Number(payload.data.id))

    const result = await this.auctionService.deleteAuction(Number(payload.data.id));

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.auctionService.listAuction();

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }
}

export const auctionController = new AuctionController();
