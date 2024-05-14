'use client'

import { login } from '@/libs/api/auth'
import { Input, InputPassword } from '@/libs/components/Form'
import { useAuth } from '@/libs/context'
import { ErrorTypeResponse } from '@/libs/types/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Logo from 'public/assets/svgs/logo.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { LoginInputSchema, LoginInputType } from './type'

const Login = () => {
  const router = useRouter()
  const { setAccessToken, setAdmin } = useAuth()
  const { control, handleSubmit, setError } = useForm<LoginInputType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginInputSchema),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { user } = data.data
      setAccessToken(user.token)
      setAdmin(user)
      router.push('/')
      toast.success('Đăng nhập thành công')
    },
    onError: (error: ErrorTypeResponse) => {
      const { data: responseData } = error.response || {}
      const errorMessage = responseData?.message
      const errorValidation = responseData?.errors
      if (errorValidation) {
        const { email, password } = errorValidation

        if (email) {
          setError('email', { message: email })
        }

        if (password) {
          setError('password', { message: password })
        }

        return
      }

      if (errorMessage) {
        setError('email', { message: errorMessage })
      }

      toast.error('Đăng nhập thất bại')
    },
  })

  const onSubmit: SubmitHandler<LoginInputType> = (data) => {
    mutate(data)
  }

  return (
    <Stack width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Stack
        mb="53px"
        gap="39px"
        width={320}
        component="form"
        textAlign="center"
        onSubmit={handleSubmit(onSubmit)}
        justifyContent="center"
        alignItems="center"
      >
        <Logo />

        <Typography variant="h2" color="grey.900">
          Đăng nhập
        </Typography>

        <Stack gap={3.5} width="100%">
          <Stack gap={1}>
            <Input
              control={control}
              autoComplete="email"
              name="email"
              placeholder="Nhập email của bạn"
              label="Email"
              required
              fullWidth
            />

            <InputPassword
              control={control}
              autoComplete="new-password"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              label="Mật khẩu"
              required
            />
          </Stack>

          <Button variant="contained" type="submit" disabled={isPending}>
            Đăng nhập
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export { Login }
