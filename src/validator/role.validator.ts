import { z } from 'zod'

export const createRole = z.object({
  name: z
    .string(),
  description: z
    .string(),
})

export interface ICreateRole extends z.infer<typeof createRole> { }