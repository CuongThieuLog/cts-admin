import { PaginationType } from '@/libs/types/pagination'
import { z } from 'zod'

export type UserParamsType = {
  page: number
  limit: number
  username: string
  role: string
}

export type Labor = {
  _id: string
  labor_name: string
  position: string
  rate_per_hour: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Root {
  _id: string
  email: string
  role: number
  labor_id: LaborId
}

export interface LaborId {
  _id: string
  position: string
  rate_per_hour: number
  information_id: InformationId
  createdAt: string
  updatedAt: string
  __v: number
}

export interface InformationId {
  _id: string
  firstName: string
  lastName: string
  gender: number
  dob: string
  phone: string
  address: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type UserType = {
  _id: string
  email: string
  role: number
  labor_id?: LaborId
}

export type UserCsvType = {
  Mã: string
  Email: string
  Quyền: number
  'Mã nhân công': string
  position: string
  rate_per_hour: number
  firstName: string
  lastName: string
}

export type UserListType = {
  data: UserType[]
} & PaginationType

export const UserCreateInputSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email không được để trống',
    })
    .email({ message: 'Email không hợp lệ' }),
  password: z.string().min(6, {
    message: 'Mật khẩu phải có ít nhất 6 ký tự',
  }),
  firstName: z.string().min(1, {
    message: 'Tên không được để trống',
  }),
  lastName: z.string().min(1, {
    message: 'Họ không được để trống',
  }),
  gender: z.number(),
  dob: z
    .string()
    .min(1, {
      message: 'Ngày sinh không được để trống',
    })
    .or(z.date()),
  phone: z.string().min(1, {
    message: 'Số điện thoại không được để trống',
  }),
  address: z.string().min(1, {
    message: 'Địa chỉ không được để trống',
  }),
  position: z.string().min(1, {
    message: 'Chức vụ không được để trống',
  }),
  rate_per_hour: z.string().min(1, {
    message: 'Lương theo giờ không được để trống',
  }),
  role: z.string().or(z.number()).optional().nullable(),
})

export const UserUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(UserCreateInputSchema)

export type UserCreateInputType = z.infer<typeof UserCreateInputSchema>
export type UserUpdateInputType = z.infer<typeof UserUpdateInputSchema>
