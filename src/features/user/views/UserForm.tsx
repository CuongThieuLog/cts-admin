'use client'

import { DatePicker } from '@/libs/components/DatePicker'
import { FormLayout, Input, Select } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCreateUser, useGetUser, useUpdateUser } from '../hooks'
import { UserCreateInputSchema, UserCreateInputType } from '../type'
import { POSITION_OPTIONS } from './UserFilter'

const UserForm = () => {
  const { userId } = useParams()
  const { data } = useGetUser(userId as string)
  const labor_id = data?.labor_id._id || ''
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateInputType>({
    defaultValues: {
      address: '',
      dob: '',
      email: '',
      firstName: '',
      gender: 0,
      lastName: '',
      password: '123456789',
      phone: '',
      position: '',
      rate_per_hour: '',
    },
    values: {
      email: data?.email || '',
      position: data?.labor_id.position || '',
      address: data?.labor_id.information_id.address || '',
      dob: data?.labor_id.information_id.dob || '',
      firstName: data?.labor_id.information_id.firstName || '',
      gender: data?.labor_id.information_id.gender || 0,
      lastName: data?.labor_id.information_id.lastName || '',
      password: '123456789',
      phone: data?.labor_id.information_id.phone || '',
      rate_per_hour: String(data?.labor_id.rate_per_hour) || '',
      role: String(data?.role),
    },
    resolver: zodResolver(UserCreateInputSchema),
  })
  const router = useRouter()

  const { mutate: create } = useCreateUser()
  const { mutate: update } = useUpdateUser()

  const onSubmit: SubmitHandler<UserCreateInputType> = (data) => {
    if (userId) {
      update(
        {
          ...data,
          _id: labor_id,
          role: Number(data.role),
        },
        {
          onSuccess: () => {
            toast.success('Cập nhật người dùng thành công')
            router.push('/user')
          },
          onError: () => {
            toast.error('Cập nhật người dùng thất bại')
          },
        },
      )

      return
    }

    create(data, {
      onSuccess: () => {
        toast.success('Tạo người dùng thành công')
        router.push('/user')
      },
      onError: () => {
        toast.error('Tạo người dùng thất bại')
      },
    })
  }

  return (
    <FormLayout
      title={userId ? 'Cập nhật người dùng' : 'Tạo người dùng'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!userId}
    >
      <Stack width={450} spacing={1}>
        <Input name="email" label="Email" control={control} />

        <Input name="position" label="Vị trí" control={control} />

        <Input name="rate_per_hour" label="Lương theo giờ" control={control} type="number" />

        <Input name="firstName" label="Tên" control={control} />

        <Input name="lastName" label="Họ" control={control} />

        <Input name="phone" label="Số điện thoại" control={control} />

        <Input name="address" label="Địa chỉ" control={control} />

        <DatePicker name="dob" label="Ngày sinh" control={control} />

        <Select
          name="gender"
          label="Giới tính"
          control={control}
          options={[
            { label: 'Nam', value: 0 },
            { label: 'Nữ', value: 1 },
          ]}
        />

        {userId && (
          <Select
            hiddenEmpty
            name="role"
            label="Quyền"
            control={control}
            options={POSITION_OPTIONS}
          />
        )}
      </Stack>
    </FormLayout>
  )
}

export { UserForm }
