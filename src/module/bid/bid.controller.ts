import { Request, Response } from "express";
import { BidService } from "./bid.service";
import { HttpStatusClientError, HttpStatusSuccess } from "../../enum/HttpStatusCodes.enum";
import { Result } from "../../handler/response";
import { createBid } from "../../validator/bid.validator";
import { idValidator } from "../../validator";

class BidController {
  bidService: BidService

  constructor() {
    this.bidService = new BidService();
  }

  public create = async (req: Request, res: Response) => {
    const payload = createBid.safeParse(req.body);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.bidService.createBid(payload.data);

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.bidService.getBids();

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }

  public get = async (req: Request, res: Response) => {
    const payload = idValidator.safeParse(req.params.id);

    if (payload.success === false) {
      return new Result().handler(
        'ERROR',
        HttpStatusClientError.BadRequest,
        payload.error.issues[0].message,
        res
      );
    }

    const result = await this.bidService.getBidById(Number(payload.data.id));

    return new Result().handler(
      'SUCCESS',
      HttpStatusSuccess.OK,
      result,
      res
    )
  }
}

export const bidController = new BidController();
