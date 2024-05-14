import { PaginationType } from '@/libs/types/pagination'
import { z } from 'zod'
import { ProjectType } from '../../type'

export type EquipmentType = {
  _id: string
  equipment_name: string
  quantity: string
  description: string
  project_id: ProjectType
}

export type EquipmentListType = {
  data: EquipmentType[]
} & PaginationType

export type EquipmentParamsType = {
  equipment_name?: string
  page: number
  limit: number
}

export const EquipmentCreateInputSchema = z.object({
  equipment_name: z.string().min(1, {
    message: 'Tên thiết bị không được để trống',
  }),
  quantity: z
    .string()
    .min(1, {
      message: 'Số lượng không được để trống',
    })
    .or(z.number()),
  description: z.string().min(1, {
    message: 'Mô tả không được để trống',
  }),
  project_id: z.string(),
})

export const EquipmentUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(EquipmentCreateInputSchema)

export type EquipmentCreateInputType = z.infer<typeof EquipmentCreateInputSchema>
export type EquipmentUpdateInputType = z.infer<typeof EquipmentUpdateInputSchema>

export type EquipmentDetailType = {
  data: EquipmentType
}
