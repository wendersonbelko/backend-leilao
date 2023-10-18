import { z } from 'zod'

export const createPlan = z.object({
  name: z
    .string(),
  price: z
    .number(),
  days: z
    .number(),
})

export interface ICreatePlan extends z.infer<typeof createPlan> { }