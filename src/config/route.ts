import { Router } from 'express';
import { AuctionRouter } from '../module/auction/auction.route';
import { RoleRouter } from '../module/role/role.route';
import { BidRouter } from '../module/bid/bid.route';
import { CategoryRouter } from '../module/category/category.route';
import { AuthRouter } from '../module/auth/auth.route';

const router = Router();

router.use('/auction', AuctionRouter);
router.use('/role', RoleRouter);
router.use('/bid', BidRouter);
router.use('/category', CategoryRouter);
router.use('/auth', AuthRouter);

export { router };