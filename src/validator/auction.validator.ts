import { z } from 'zod'

export const createAuction = z.object({
  name: z
    .string(),
  description: z
    .string(),
  start: z
    .string().transform((value) => new Date(value)),
  end: z
    .string().transform((value) => new Date(value)),
  weight: z
    .number(),
  category_id: z
    .number(),
})

export interface ICreateAuction extends z.infer<typeof createAuction> { }