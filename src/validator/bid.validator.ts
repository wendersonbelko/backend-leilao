import { z } from 'zod'

export const createBid = z.object({
  auction_id: z
    .number(),
  user_id: z
    .number(),
  amount: z
    .number(),
})

export interface ICreateBid extends z.infer<typeof createBid> { }