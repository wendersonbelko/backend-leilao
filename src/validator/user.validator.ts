import { z } from 'zod'

export const userLogin = z.object({
  username: z
  .string()
  .max(15, 'O nome de usuário deve ter no máximo 15 caracteres'),
  password: z
  .string()
})

export interface IUserLogin extends z.infer<typeof userLogin> {}

export const userRegister = z.object({
  username: z
  .string()
  .max(15, 'O nome de usuário deve ter no máximo 15 caracteres'),
  password: z
  .string()
  .min(8, 'A senha deve ter no minimo 8 caracteres')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial')
  .max(20, 'A senha deve ter no máximo 20 caracteres'),
  email: z
  .string()
  .email('Email inválido'),
  name: z
  .string()
  .min(5, 'O nome deve ter no minimo 5 caracteres')
  .max(50, 'O nome deve ter no máximo 50 caracteres')
})

export interface IUserRegister extends z.infer<typeof userRegister> {}