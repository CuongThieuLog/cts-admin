'use client'

import { useGetAllMaterial } from '@/features/material/hooks'
import { useGetAllProject } from '@/features/project/hooks'
import { useGetAllUser } from '@/features/user/hooks'
import { DatePicker } from '@/libs/components/DatePicker'
import { FormLayout, Input, Select } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCreateCost, useGetCost, useUpdateCost } from '../hooks'
import { CostCreateInputSchema, CostCreateInputType } from '../type'

const CostForm = () => {
  const { costId } = useParams()
  const { data } = useGetCost(costId as string)
  const { control, handleSubmit, setValue } = useForm<CostCreateInputType>({
    defaultValues: {
      cost_amount: '',
      cost_date: new Date(),
      labor: '',
      material: '',
      project: '',
    },
    resolver: zodResolver(CostCreateInputSchema),
  })
  const router = useRouter()

  const { mutate: create } = useCreateCost()
  const { mutate: update } = useUpdateCost()
  const { data: projectData } = useGetAllProject()
  const { data: userData } = useGetAllUser()
  const { data: materialData } = useGetAllMaterial()

  const onSubmit: SubmitHandler<CostCreateInputType> = (data) => {
    if (costId) {
      update(
        {
          ...data,
          _id: costId as string,
        },
        {
          onSuccess: () => {
            toast.success('Cập nhật chi phí thành công')
            router.push('/cost')
          },
        },
      )

      return
    }

    create(data, {
      onSuccess: () => {
        toast.success('Tạo chi phí thành công')
        router.push('/cost')
      },
    })
  }

  useEffect(() => {
    if (data) {
      setValue('cost_amount', data.cost_amount)
      setValue('cost_date', data.cost_date)
      setValue('labor', data.labor)
      setValue('material', data.material)
      setValue('project', data.project)
    }
  }, [data, setValue])

  return (
    <FormLayout
      title={costId ? 'Cập nhật chi phí' : 'Tạo chi phí'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!costId}
    >
      <Stack width={450} spacing={1}>
        <Select hiddenEmpty name="project" label="Dự án" control={control} options={projectData} />
        <Select hiddenEmpty name="labor" label="Nhân công" control={control} options={userData} />
        <Select
          hiddenEmpty
          name="material"
          label="Vật tư"
          control={control}
          options={materialData}
        />
        <DatePicker name="cost_date" label="Ngày chi phí" control={control} />
        <Input name="cost_amount" label="Số tiền chi phí" control={control} type="number" />
      </Stack>
    </FormLayout>
  )
}

export { CostForm }
