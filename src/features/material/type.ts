import { PaginationType } from '@/libs/types/pagination'
import { z } from 'zod'

export type MaterialParamsType = {
  page: number
  limit: number
  material_name: string
}

export type MaterialType = {
  _id: string
  material_name: string
  unit_price: number
  quantity_availiable: number
  project_id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type MaterialListType = {
  data: MaterialType[]
} & PaginationType

export const MaterialCreateInputSchema = z.object({
  material_name: z.string().min(1, {
    message: 'Tên vật liệu không được để trống',
  }),
  unit_price: z.string().min(1, {
    message: 'Đơn giá không được để trống',
  }),
  quantity_availiable: z.string().min(1, {
    message: 'Số lượng không được để trống',
  }),
  project_id: z.string().min(1, {
    message: 'Dự án không được để trống',
  }),
})

export const MaterialUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(MaterialCreateInputSchema)

export type MaterialCreateInputType = z.infer<typeof MaterialCreateInputSchema>
export type MaterialUpdateInputType = z.infer<typeof MaterialUpdateInputSchema>
export type MaterialDetailType = {
  data: MaterialType
}
