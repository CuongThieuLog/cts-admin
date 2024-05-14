'use client'

import { MaterialCreateInputSchema, MaterialCreateInputType } from '@/features/material'
import { useCreateMaterial, useGetMaterial, useUpdateMaterial } from '@/features/material/hooks'
import { FormLayout, Input } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const MaterialForm = () => {
  const { materialId, projectId } = useParams()
  const { data } = useGetMaterial(materialId as string)
  const { control, handleSubmit } = useForm<MaterialCreateInputType>({
    defaultValues: {
      material_name: '',
      quantity_availiable: '',
      unit_price: '',
      project_id: String(projectId),
    },
    values: {
      material_name: data?.material_name || '',
      quantity_availiable: String(data?.quantity_availiable) || '',
      unit_price: String(data?.unit_price) || '',
      project_id: String(projectId),
    },
    resolver: zodResolver(MaterialCreateInputSchema),
  })
  const router = useRouter()
  const { mutate: create } = useCreateMaterial()
  const { mutate: update } = useUpdateMaterial()
  console.log(data)
  const onSubmit: SubmitHandler<MaterialCreateInputType> = (data) => {
    if (materialId) {
      update(
        {
          ...data,
          project_id: String(projectId),
          _id: materialId as string,
        },
        {
          onSuccess: () => {
            toast.success('Cập nhật vật liệu thành công')
            router.push(`/project/${projectId}/material`)
          },
          onError: () => {
            toast.error('Cập nhật vật liệu thất bại')
          },
        },
      )

      return
    }

    create(
      {
        ...data,
        project_id: String(projectId),
      },
      {
        onSuccess: () => {
          toast.success('Tạo vật liệu thành công')
          router.push(`/project/${projectId}/material`)
        },
        onError: () => {
          toast.error('Tạo vật liệu thất bại')
        },
      },
    )
  }

  return (
    <FormLayout
      title={materialId ? 'Cập nhật vật liệu cho công trình' : 'Tạo vật liệu cho công trình'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!materialId}
    >
      <Stack width={450} spacing={1}>
        <Input control={control} name="material_name" label="Tên vật tư" />
        <Input control={control} name="unit_price" label="Đơn giá" type="number" />
        <Input control={control} name="quantity_availiable" label="Số lượng" type="number" />
      </Stack>
    </FormLayout>
  )
}

export { MaterialForm }
