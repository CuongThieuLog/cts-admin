'use client'

import { useGetAllProject } from '@/features/project/hooks'
import { DatePicker } from '@/libs/components/DatePicker'
import { FormLayout, Input, Select } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCreateReport, useGetReport, useUpdateReport } from '../hooks'
import { ReportCreateInputSchema, ReportCreateInputType } from '../type'

const ReportForm = () => {
  const { reportId } = useParams()
  const { data } = useGetReport(reportId as string)
  const { control, handleSubmit, setValue } = useForm<ReportCreateInputType>({
    defaultValues: {
      actual_cost: '',
      progress: '',
      project: '',
      report_date: new Date(),
    },
    resolver: zodResolver(ReportCreateInputSchema),
  })
  const router = useRouter()

  const { mutate: create } = useCreateReport()
  const { mutate: update } = useUpdateReport()
  const { data: projectData } = useGetAllProject()

  const onSubmit: SubmitHandler<ReportCreateInputType> = (data) => {
    if (reportId) {
      update(
        {
          ...data,
          _id: reportId as string,
        },
        {
          onSuccess: () => {
            toast.success('Cập nhật báo cáo thành công')
            router.push('/report')
          },
          onError: () => {
            toast.error('Cập nhật báo cáo thất bại')
          },
        },
      )

      return
    }

    create(data, {
      onSuccess: () => {
        toast.success('Tạo báo cáo thành công')
        router.push('/report')
      },
      onError: () => {
        toast.error('Tạo báo cáo thất bại')
      },
    })
  }

  useEffect(() => {
    if (data) {
      setValue('actual_cost', String(data.actual_cost))
      setValue('progress', String(data.progress))
      setValue('project', data.project)
      setValue('report_date', new Date(data.report_date))
    }
  }, [data, setValue])

  return (
    <FormLayout
      title={reportId ? 'Cập nhật người dùng' : 'Tạo người dùng'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!reportId}
    >
      <Stack width={450} spacing={1}>
        <Select
          name="project"
          control={control}
          label="Tên dự án"
          options={projectData}
          placeholder="Dự án"
        />
        <DatePicker name="report_date" control={control} label="Ngày báo cáo" />
        <Input name="actual_cost" control={control} label="Chi phí thực tế" type="number" />
        <Input name="progress" control={control} label="Tiến độ" type="number" />
      </Stack>
    </FormLayout>
  )
}

export { ReportForm }
