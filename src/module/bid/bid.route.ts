import { Router } from "express";
import { bidController } from "./bid.controller";

const BidRouter = Router();

BidRouter.post('/', bidController.create)
BidRouter.get('/', bidController.list)
BidRouter.get('/:id', bidController.get)

export { BidRouter }