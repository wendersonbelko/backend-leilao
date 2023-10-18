import { Auction } from "@prisma/client";
import { AuctionRepository } from "./auction.repository";

export class AuctionService {
  auctionRepository: AuctionRepository

  constructor() {
    this.auctionRepository = new AuctionRepository();
  }
  createAuction(payload: Partial<Auction>) {
    this.auctionRepository.createAuction(payload);
  }
  getAuction(id: number) {
    return this.auctionRepository.getAuction(id);
  }
  updateAuction(payload: Partial<Auction>) {
    return this.auctionRepository.updateAuction(payload);
  }
  deleteAuction(id: number) {
    return this.auctionRepository.deleteAuction(id);
  }
  listAuction() {
    return this.auctionRepository.listAuction();
  }
}