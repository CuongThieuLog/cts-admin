'use client'

import { FormLayout, Input, Select } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useGetAllProject } from '../../hooks'
import { useCreateEquipment } from './hooks/useCreateEquiment'
import { useGetEquipment } from './hooks/useGetEquipment'
import { useUpdateEquipment } from './hooks/useUpdateEquipment'
import { EquipmentCreateInputSchema, EquipmentCreateInputType } from './type'

const EquipmentForm = () => {
  const { equipmentId, projectId } = useParams()
  const { data } = useGetEquipment(equipmentId as string)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EquipmentCreateInputType>({
    defaultValues: {
      description: '',
      equipment_name: '',
      project_id: '',
      quantity: '',
    },
    values: {
      description: data?.description || '',
      equipment_name: data?.equipment_name || '',
      project_id: projectId ? String(projectId) : data?.project_id._id || '',
      quantity: data?.quantity || '',
    },
    resolver: zodResolver(EquipmentCreateInputSchema),
  })

  const router = useRouter()
  const { mutate: create } = useCreateEquipment()
  const { mutate: update } = useUpdateEquipment()
  const { data: projectOptions } = useGetAllProject()

  const onSubmit: SubmitHandler<EquipmentCreateInputType> = (data) => {
    const project_id = projectId ? String(projectId) : data.project_id

    if (equipmentId) {
      update(
        {
          ...data,
          project_id,
          _id: String(equipmentId),
        },
        {
          onSuccess: () => {
            toast.success('Chỉnh sửa trang thiết bị công trình thành công')
            if (projectId) {
              router.push(`/project/${projectId}/equipment`)
              return
            }

            router.push('/equipment')
          },
          onError: () => {
            toast.error('Chỉnh sửa trang thiết bị công trình thất bại')
          },
        },
      )

      return
    }

    create(
      {
        ...data,
        project_id,
      },
      {
        onSuccess: () => {
          toast.success('Thêm mới trang thiết bị công trình thành công')
          if (projectId) {
            router.push(`/project/${projectId}/equipment`)
            return
          }

          router.push('/equipment')
        },
      },
    )
  }

  return (
    <FormLayout
      title={
        equipmentId ? 'Chỉnh sửa trang thiết bị công trình' : 'Thêm mới trang thiết bị công trình'
      }
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!equipmentId}
    >
      <Stack width={450} spacing={1}>
        <Input name="equipment_name" label="Tên trang thiết bị" control={control} />
        <Input name="quantity" label="Số lượng" control={control} />
        <Input name="description" label="Mô tả" control={control} />
        {!projectId && (
          <Select options={projectOptions} name="project_id" label="Dự án" control={control} />
        )}
      </Stack>
    </FormLayout>
  )
}

export { EquipmentForm }
