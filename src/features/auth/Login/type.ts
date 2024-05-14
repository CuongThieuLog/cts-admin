import { TypeOf, z } from 'zod'

export const LoginInputSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Email không đúng định dạng',
    })
    .trim()
    .min(1, {
      message: 'Email không được để trống',
    }),
  password: z.string().trim().min(1, {
    message: 'Mật khẩu không được để trống',
  }),
})

const AdminInfoSchema = z.object({
  _id: z.string(),
  username: z.string(),
  email: z.string(),
  token: z.string(),
})

export const LoginOutputSchema = z.object({
  user: AdminInfoSchema,
})

export const AdminResponseSchema = z.object({
  user: z.object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    token: z.string(),
  }),
})

export type LoginInputType = TypeOf<typeof LoginInputSchema>
export type LoginOutputType = TypeOf<typeof LoginOutputSchema>
export type AdminInfoType = TypeOf<typeof AdminInfoSchema>
export type AdminResponseType = TypeOf<typeof AdminResponseSchema>
export type AdminMeType = {
  tokens: {
    token: string
    _id: string
  }[]
} & AdminInfoType
