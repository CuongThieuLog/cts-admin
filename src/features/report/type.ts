import { PaginationType } from '@/libs/types/pagination'
import { z } from 'zod'

export type ReportParamsType = {
  page: number
  limit: number
}

export type ReportType = {
  _id: string
  project: string
  report_date: string
  progress: number
  actual_cost: number
  createdAt: string
  updatedAt: string
  __v: number
}

export type ReportDetailType = {
  data: ReportType
}

export type ReportListType = {
  data: ReportType[]
} & PaginationType

export const ReportCreateInputSchema = z.object({
  project: z.string().min(1, {
    message: 'Tên dự án không được để trống',
  }),
  report_date: z.string().or(z.date()),
  progress: z.string(),
  actual_cost: z.string(),
})

export const ReportUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(ReportCreateInputSchema)

export type ReportCreateInputType = z.infer<typeof ReportCreateInputSchema>
export type ReportUpdateInputType = z.infer<typeof ReportUpdateInputSchema>
