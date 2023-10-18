import { Bid } from "@prisma/client";
import { BidRepository } from "./bid.repository";

export class BidService {
  bidRepository: BidRepository;

  constructor() {
    this.bidRepository = new BidRepository();
  }

  async createBid(data: Partial<Bid>) {
    return await this.bidRepository.createBid(data);
  }

  async getBidById(id: number) {
    return await this.bidRepository.getBidById(id);
  }

  async getBids() {
    return await this.bidRepository.getBids();
  }
}