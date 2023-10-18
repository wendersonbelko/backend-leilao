import { Router } from 'express'
import { auctionController } from './auction.controller'
import { AuthMiddleware } from '../../middleware/auth.middleware'

const AuctionRouter = Router()

AuctionRouter.post('/', AuthMiddleware, auctionController.create)
AuctionRouter.get('/', auctionController.list)
AuctionRouter.get('/:id', auctionController.get)
AuctionRouter.put('/:id', auctionController.update)
AuctionRouter.delete('/:id', auctionController.delete)

export { AuctionRouter }
