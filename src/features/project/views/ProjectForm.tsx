'use client'

import { useGetAllUserProjectManager } from '@/features/user/hooks'
import { DatePicker } from '@/libs/components/DatePicker'
import { ButtonEdit, FormLayout, Input, Select } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCreateProject, useGetProject, useUpdateProject } from '../hooks'
import { ProjectCreateInputSchema, ProjectCreateInputType } from '../type'
import { ModalLabor } from './components'

const ProjectForm = () => {
  const { projectId } = useParams()
  const { data } = useGetProject(projectId as string)
  const { control, handleSubmit } = useForm<ProjectCreateInputType>({
    defaultValues: {
      project_code: '',
      project_name: '',
      start_date: new Date(),
      end_date: new Date(),
      budget: '',
      project_manager: '',
    },
    values: data,
    resolver: zodResolver(ProjectCreateInputSchema),
  })

  const router = useRouter()
  const { mutate: create } = useCreateProject()
  const { mutate: update } = useUpdateProject()
  const { projectManager } = useGetAllUserProjectManager()

  const onSubmit: SubmitHandler<ProjectCreateInputType> = (data) => {
    if (projectId) {
      update(
        {
          ...data,
          _id: projectId as string,
        },
        {
          onSuccess: () => {
            toast.success('Cập nhật dự án thành công')
            router.push('/project')
          },
          onError: () => {
            toast.error('Cập nhật dự án thất bại')
          },
        },
      )

      return
    }

    create(data, {
      onSuccess: () => {
        toast.success('Tạo công trình thành công')
        router.push('/project')
      },
      onError: () => {
        toast.error('Tạo công trình thất bại')
      },
    })
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <FormLayout
      title={projectId ? 'Chỉnh sửa công trình' : 'Thêm mới công trình'}
      onSubmit={handleSubmit(onSubmit)}
      isEdit={!!projectId}
      customButton={
        <ButtonEdit variant="contained" color="primary" onClick={handleOpen}>
          Hiển thị nhân công
        </ButtonEdit>
      }
    >
      <Stack width={450} spacing={1}>
        <Input name="project_code" label="Mã công trình" control={control} />

        <Input name="project_name" label="Tên công trình" control={control} />

        {!projectId && <DatePicker name="start_date" label="Ngày bắt đầu" control={control} />}

        <DatePicker name="end_date" label="Ngày kết thúc" control={control} />

        <Input name="budget" label="Ngân sách" control={control} type="number" />

        <Select
          name="project_manager"
          label="Người quản lý dự án"
          control={control}
          options={projectManager}
        />
      </Stack>

      <ModalLabor handleClose={handleClose} open={open} handleOpen={handleOpen} />
    </FormLayout>
  )
}

export { ProjectForm }
