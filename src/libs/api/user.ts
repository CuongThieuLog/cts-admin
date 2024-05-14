import {
  UserCreateInputType,
  UserListType,
  UserParamsType,
  UserType,
  UserUpdateInputType,
} from '@/features/user'
import request from '../config/axios'

type AllUser = {
  data: UserType[]
}

export const getUsers = async (params: UserParamsType) => {
  try {
    const res = await request.get<UserListType>('/user/all', {
      params,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const getUser = async (userId: string) => {
  try {
    const res = await request.get<UserType>(`/user/get-by/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createUser = async (data: UserCreateInputType) => {
  try {
    const res = await request.post('/labor/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateUser = async (data: UserUpdateInputType) => {
  try {
    const { _id, ...rest } = data
    const res = await request.put(`/labor/update/${_id}`, rest)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const res = await request.delete(`/user/delete/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllLabor = async () => {
  try {
    const res = await request.get<AllUser>('/user/all-no-page?role=2')
    return res.data.data
  } catch (error) {
    throw error
  }
}

export const getAllUserProjectManager = async () => {
  try {
    const res = await request.get<AllUser>('/user/all-no-page?role=1')

    return res.data.data
  } catch (error) {
    throw error
  }
}
