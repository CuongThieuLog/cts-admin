import {
  MaterialCreateInputType,
  MaterialDetailType,
  MaterialListType,
  MaterialParamsType,
  MaterialUpdateInputType,
} from '@/features/material'
import { SelectOption } from '../components/Form'
import request from '../config/axios'

export const getMaterials = async (params: MaterialParamsType) => {
  try {
    const res = await request.get<MaterialListType>('/material/all', {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getMaterialsByProject = async ({
  projectId,
  params,
}: {
  projectId: string
  params: MaterialParamsType
}) => {
  try {
    const res = await request.get<MaterialListType>(`/material/project/get-by/${projectId}`, {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getMaterial = async (materialId: string) => {
  try {
    const res = await request.get<MaterialDetailType>(`/material/get-by/${materialId}`)
    return res.data.data
  } catch (error) {
    throw error
  }
}

export const createMaterial = async (data: MaterialCreateInputType) => {
  try {
    const res = await request.post('/material/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateMaterial = async (data: MaterialUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put(`/material/update/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteMaterial = async (materialId: string) => {
  try {
    const res = await request.delete(`/material/${materialId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllMaterials = async () => {
  try {
    const res = await request.get<SelectOption[]>('/material/all/key-value')
    return res.data
  } catch (error) {
    throw error
  }
}
