import { PrismaClient, Auction } from '@prisma/client'

export class AuctionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public createAuction = async (payload: Partial<Auction>) => {
    return this.prisma.auction.create({
      data: {
        name: payload.name!,
        description: payload.description!,
        start: payload.start!,
        end: payload.end!,
        user_id: payload.user_id!,
        category_id: payload.category_id!,
        weight: payload.weight!,
      },
    }).finally();
  }

  public getAuction(id: number) {
    return this.prisma.auction.findUnique({
      where: {
        id,
      },
      include: {
        AuctionImage: true,
        Category: true,
      },
    });
  }

  public updateAuction(payload: Partial<Auction>) {
    return this.prisma.auction.update({
      where: {
        id: payload.id,
      },
      data: payload,
    });
  }

  public deleteAuction(id: number) {
    return this.prisma.auction.delete({
      where: {
        id: id,
      },
    });
  }

  public listAuction() {
    const result = this.prisma.auction.findMany({
      include: {
        AuctionImage: true,
        Category: true,
      }
    });
    return result
  }
}