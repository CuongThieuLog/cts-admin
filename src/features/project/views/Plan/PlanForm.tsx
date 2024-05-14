'use client'

import { DatePicker } from '@/libs/components/DatePicker'
import { FormLayout, Input } from '@/libs/components/Form'
import { useAuth } from '@/libs/context'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreatePlan, useGetPlan, useUpdatePlan } from '../../hooks'
import { PlanCreateInputSchema, PlanCreateInputType } from '../../type'

const PlanForm = () => {
  const { planId, projectId } = useParams()
  const { data } = useGetPlan(planId as string)
  const { admin } = useAuth()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PlanCreateInputType>({
    defaultValues: {
      deadline: new Date(),
      plan_name: '',
      project_id: projectId as string,
      start_date: new Date(),
      created_by: admin?._id,
    },
    resolver: zodResolver(PlanCreateInputSchema),
  })

  const router = useRouter()
  const { mutate: create } = useCreatePlan()
  const { mutate: update } = useUpdatePlan()

  useEffect(() => {
    if (data) {
      setValue('plan_name', data.plan_name)
      setValue('start_date', new Date(data.start_date))
      setValue('deadline', new Date(data.deadline))
    }
  }, [data, setValue])

  const onSubmit: SubmitHandler<PlanCreateInputType> = (data) => {
    if (planId) {
      update(
        {
          ...data,
          project_id: String(projectId),
          _id: String(planId),
          created_by: String(admin?._id),
        },
        {
          onSuccess: () => {
            router.push(`/project/${projectId}/plan`)
          },
        },
      )

      return
    }

    create(
      {
        ...data,
        project_id: String(projectId),
        created_by: String(admin?._id),
      },
      {
        onSuccess: () => {
          router.push(`/project/${projectId}/plan`)
        },
      },
    )
  }

  return (
    <FormLayout
      title={planId ? 'Chỉnh sửa kế hoạch công trình' : 'Thêm mới kế hoạch công trình'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!planId}
    >
      <Stack width={450} spacing={1}>
        <Input name="plan_name" label="Tên kế hoạch" control={control} />

        {!planId && (
          <>
            <DatePicker name="start_date" label="Ngày bắt đầu" control={control} />
          </>
        )}

        <DatePicker name="deadline" label="Ngày kết thúc" control={control} />
      </Stack>
    </FormLayout>
  )
}

export { PlanForm }
