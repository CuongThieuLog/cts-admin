import {
  EquipmentCreateInputType,
  EquipmentDetailType,
  EquipmentListType,
  EquipmentParamsType,
  EquipmentUpdateInputType,
} from '@/features/project/views/Equiment/type'
import request from '../config/axios'

export const getEquipments = async (params: EquipmentParamsType) => {
  try {
    const res = await request.get<EquipmentListType>('/equipment/all', {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getEquipment = async (equipmentId: string) => {
  try {
    const res = await request.get<EquipmentDetailType>(`/equipment/get-by/${equipmentId}`)
    return res.data.data
  } catch (error) {
    throw error
  }
}

export const createEquipment = async (data: EquipmentCreateInputType) => {
  try {
    const res = await request.post('/equipment/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateEquipment = async (data: EquipmentUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put(`/equipment/update/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteEquipment = async (equipmentId: string) => {
  try {
    const res = await request.delete(`/equipment/${equipmentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getEquipmentsByProject = async ({
  projectId,
  params,
}: {
  projectId: string
  params: EquipmentParamsType
}) => {
  try {
    const res = await request.get<EquipmentListType>(`/equipment/project/get-by/${projectId}`, {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}
