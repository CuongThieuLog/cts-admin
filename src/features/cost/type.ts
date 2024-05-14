import { PaginationType } from '@/libs/types/pagination'
import { z } from 'zod'

export type CostParamsType = {
  page: number
  limit: number
  project?: string
}

export type CostType = {
  _id: string
  project: string
  labor: string
  material: string
  cost_date: string
  cost_amount: number
}

export type CostDetailType = {
  Cost: CostType
}

export type CostListType = {
  data: CostType[]
} & PaginationType

export const CostCreateInputSchema = z.object({
  project: z.string().min(1, {
    message: 'Mã dự án không được để trống',
  }),
  labor: z.string().min(1, {
    message: 'Mã nhân công không được để trống',
  }),
  material: z.string().min(1, {
    message: 'Mã vật tư không được để trống',
  }),
  cost_date: z
    .string()
    .min(1, {
      message: 'Ngày chi phí không được để trống',
    })
    .or(z.date()),
  cost_amount: z
    .string()
    .min(1, {
      message: 'Số tiền chi phí không được để trống',
    })
    .or(z.number()),
})

export const CostUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(CostCreateInputSchema)

export type CostCreateInputType = z.infer<typeof CostCreateInputSchema>
export type CostUpdateInputType = z.infer<typeof CostUpdateInputSchema>
