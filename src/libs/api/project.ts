import {
  PlanCreateInputType,
  PlanDetailType,
  PlanParamsType,
  PlanResponseType,
  PlanUpdateInputType,
  ProjectCreateInputType,
  ProjectDetailType,
  ProjectParamsType,
  ProjectResponseType,
  ProjectUpdateInputType,
} from '@/features/project'
import { SelectOption } from '../components/Form'
import request from '../config/axios'

export const getProjects = async (params: ProjectParamsType) => {
  try {
    const res = await request.get<ProjectResponseType>('/project/all', {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getProject = async (projectId: string) => {
  try {
    const res = await request.get<ProjectDetailType>(`/project/get-by/${projectId}`)
    return res.data.data
  } catch (error) {
    throw error
  }
}

export const createProject = async (data: ProjectCreateInputType) => {
  try {
    const res = await request.post('/project/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProject = async (data: ProjectUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put(`/project/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllProjects = async () => {
  try {
    const res = await request.get<SelectOption[]>('/project/key-value')
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteProject = async (projectId: string) => {
  try {
    const res = await request.delete(`/project/${projectId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const exportExcelProject = async () => {
  try {
    const res = await request.get('/project/export-excel')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getPlansByProject = async (params: PlanParamsType) => {
  try {
    const { project_id, ...rest } = params
    const res = await request.get<PlanResponseType>(`/plan/project/get-by/${project_id}`, {
      params: rest,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const createPlan = async (data: PlanCreateInputType) => {
  try {
    const res = await request.post('/plan/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updatePlan = async (data: PlanUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put(`/plan/update/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getDetailPlan = async (planId: string) => {
  try {
    const res = await request.get<PlanDetailType>(`/plan/get-by/${planId}`)
    return res.data.data
  } catch (error) {
    throw error
  }
}
