import { AdminMeType, LoginInputType, LoginOutputType } from '@/features/auth'
import request from '../config/axios'

export const login = async ({ email, password }: LoginInputType) => {
  try {
    const res = await request.post<LoginOutputType>('/auth/login', {
      email,
      password,
    })

    return res
  } catch (err) {
    throw err
  }
}

export const logout = async () => {
  try {
    await request.post('/auth/logout')
  } catch (error) {
    console.log(error)
  }
}

export const getMe = async () => {
  try {
    const res = await request.get<AdminMeType>('/user/me')
    const meData = {
      ...res.data,
      token: res.data.tokens[0].token,
    }

    return meData
  } catch (error) {
    throw error
  }
}
