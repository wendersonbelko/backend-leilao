import { z } from 'zod'

export const createCategory = z.object({
  name: z
    .string(),
})

export interface ICreateCategory extends z.infer<typeof createCategory> { }