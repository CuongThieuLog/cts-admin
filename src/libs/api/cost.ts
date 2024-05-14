import {
  CostCreateInputType,
  CostListType,
  CostParamsType,
  CostType,
  CostUpdateInputType,
} from '@/features/cost'
import request from '../config/axios'

export const getCosts = async (params: CostParamsType) => {
  try {
    const res = await request.get<CostListType>('/cost', {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getCost = async (costId: string) => {
  try {
    const res = await request.get<CostType>(`/cost/${costId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createCost = async (data: CostCreateInputType) => {
  try {
    const res = await request.post('/cost', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateCost = async (data: CostUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put(`/cost/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteCost = async (costId: string) => {
  try {
    const res = await request.delete(`/cost/${costId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
