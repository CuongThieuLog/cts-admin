import {
  ReportCreateInputType,
  ReportDetailType,
  ReportListType,
  ReportParamsType,
  ReportType,
  ReportUpdateInputType,
} from '@/features/report'
import request from '../config/axios'

export const getReports = async (params: ReportParamsType) => {
  try {
    const res = await request.get<ReportListType>('/report', {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getReport = async (id: string) => {
  try {
    const res = await request.get<ReportDetailType>(`/report/${id}`)
    return res.data.data
  } catch (error) {
    throw error
  }
}

export const createReport = async (data: ReportCreateInputType) => {
  try {
    const res = await request.post<ReportType>('/report', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateReport = async (data: ReportUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put<ReportType>(`/report/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteReport = async (id: string) => {
  try {
    const res = await request.delete<ReportType>(`/report/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
