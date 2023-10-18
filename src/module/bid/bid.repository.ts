import { Bid, PrismaClient } from "@prisma/client";

export class BidRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createBid(data: Partial<Bid>) {
    return await this.prisma.bid.create({
      data: {
        amount: data.amount!,
        user_id: data.user_id!,
        auction_id: data.auction_id!,
      }
    });
  }

  async getBidById(id: number) {
    return await this.prisma.bid.findUnique({
      where: {
        id,
      },
    });
  }

  async getBids() {
    return await this.prisma.bid.findMany();
  }
}