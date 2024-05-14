'use client'

import { useGetAllProject } from '@/features/project/hooks'
import { FormLayout, Input, Select } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCreateMaterial, useGetMaterial, useUpdateMaterial } from '../hooks'
import { MaterialCreateInputSchema, MaterialCreateInputType } from '../type'

const MaterialForm = () => {
  const { materialId } = useParams()
  const { data } = useGetMaterial(materialId as string)
  const { control, handleSubmit } = useForm<MaterialCreateInputType>({
    defaultValues: {
      material_name: '',
      quantity_availiable: '',
      unit_price: '',
      project_id: '',
    },
    values: {
      material_name: data?.material_name || '',
      quantity_availiable: String(data?.quantity_availiable) || '',
      unit_price: String(data?.unit_price) || '',
      project_id: data?.project_id || '',
    },
    resolver: zodResolver(MaterialCreateInputSchema),
  })
  const router = useRouter()
  const { data: projectOptions } = useGetAllProject()
  const { mutate: create } = useCreateMaterial()
  const { mutate: update } = useUpdateMaterial()

  const onSubmit: SubmitHandler<MaterialCreateInputType> = (data) => {
    if (materialId) {
      update(
        {
          ...data,
          _id: materialId as string,
        },
        {
          onSuccess: () => {
            toast.success('Cập nhật vật liệu thành công')
            router.push('/material')
          },
          onError: () => {
            toast.error('Cập nhật vật liệu thất bại')
          },
        },
      )

      return
    }

    create(data, {
      onSuccess: () => {
        toast.success('Tạo vật liệu thành công')
        router.push('/material')
      },
      onError: () => {
        toast.error('Tạo vật liệu thất bại')
      },
    })
  }

  return (
    <FormLayout
      title={materialId ? 'Cập nhật vật tư' : 'Tạo vật tư'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!materialId}
    >
      <Stack width={450} spacing={1}>
        <Input control={control} name="material_name" label="Tên vật tư" />
        <Input control={control} name="unit_price" label="Đơn giá" type="number" />
        <Input control={control} name="quantity_availiable" label="Số lượng" type="number" />
        <Select control={control} name="project_id" label="Dự án" options={projectOptions || []} />
      </Stack>
    </FormLayout>
  )
}

export { MaterialForm }
