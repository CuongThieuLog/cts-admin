import { PaginationType } from '@/libs/types/pagination'
import { z } from 'zod'

export type ProjectType = {
  _id: string
  project_name: string
  start_date: string
  end_date: string
  project_manager: string
  budget: number
  createdAt: string
  updatedAt: string
  __v: number
}

export type PlanType = {
  _id: string
  plan_name: string
  start_date: string
  deadline: string
  created_by: string
  evaluation: number
  project_id: ProjectType
  createdAt: string
  updatedAt: string
  __v: number
}

export type PlanResponseType = {
  data: PlanType[]
} & PaginationType

export type ProjectResponseType = {
  data: ProjectType[]
} & PaginationType

export type ProjectParamsType = {
  page: number
  limit: number
  project_name: string
}

export type PlanParamsType = {
  page: number
  limit: number
  plan_name: string
  project_id: string
}

export const ProjectCreateInputSchema = z.object({
  project_name: z
    .string()
    .min(1, {
      message: 'Tên dự án không được để trống',
    })
    .max(255),
  start_date: z.string().or(z.date()),
  end_date: z.string().or(z.date()),
  project_manager: z.string().min(1, {
    message: 'Người quản lý dự án không được để trống',
  }),
  budget: z.string().min(1, {
    message: 'Ngân sách không được để trống',
  }),
  project_code: z.string().min(1, {
    message: 'Mã dự án không được để trống',
  }),
})

export const ProjectUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(ProjectCreateInputSchema)

export const PlanCreateInputSchema = z.object({
  plan_name: z
    .string()
    .min(1, {
      message: 'Tên kế hoạch không được để trống',
    })
    .max(255),
  start_date: z.string().or(z.date()),
  deadline: z.string().or(z.date()),
  created_by: z.string().min(1, {
    message: 'Người tạo kế hoạch không được để trống',
  }),
  project_id: z.string(),
})

export const PlanUpdateInputSchema = z
  .object({
    _id: z.string(),
  })
  .merge(PlanCreateInputSchema)

export type ProjectCreateInputType = z.infer<typeof ProjectCreateInputSchema>
export type ProjectUpdateInputType = z.infer<typeof ProjectUpdateInputSchema>
export type PlanCreateInputType = z.infer<typeof PlanCreateInputSchema>
export type PlanUpdateInputType = z.infer<typeof PlanUpdateInputSchema>

export type ProjectDetailType = {
  data: ProjectUpdateInputType
}

export interface CreatedBy {
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

export interface ProjectId {
  labors: any[]
  _id: string
  project_code: string
  project_name: string
  start_date: string
  end_date: string
  project_manager: string
  budget: number
  status: number
  createdAt: string
  updatedAt: string
  __v: number
}

export type PlanDetailType = {
  data: {
    _id: string
    plan_name: string
    start_date: string
    deadline: string
    created_by: CreatedBy
    evaluation: number
    project_id: ProjectId
  }
}

export const LaborIdsSchema = z.object({
  laborIds: z.array(z.string()),
})

export type LaborIdsType = z.infer<typeof LaborIdsSchema>
