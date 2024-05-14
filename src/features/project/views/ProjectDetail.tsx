'use client'

import { DetailItem } from '@/libs/components/DetailItem'
import { DetailLayout } from '@/libs/components/Layout'
import { green, red } from '@/libs/config/theme'
import { formatDate, formatNumber } from '@/utils/format'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useDeleteProject, useGetProject } from '../hooks'
import { BoxManager } from './components'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const { data, isLoading } = useGetProject(projectId as string)
  const { mutate } = useDeleteProject()
  const router = useRouter()

  const handleDelete = () => {
    mutate(projectId as string, {
      onSuccess: () => {
        toast.success('Xóa dự án thành công')
        router.push('/project')
      },
      onError: () => {
        toast.error('Xóa dự án thất bại')
      },
    })
  }

  return (
    <DetailLayout deleteFunction={handleDelete}>
      <Stack spacing={1}>
        <DetailItem label="Tên công trình" value={data?.project_name} isPending={isLoading} />

        <DetailItem
          label="Ngày bắt đầu"
          value={formatDate(data?.start_date)}
          isPending={isLoading}
        />

        <DetailItem
          label="Ngân sách"
          value={formatNumber(data?.budget || 1)}
          isPending={isLoading}
        />

        <DetailItem
          label="Ngày bắt đầu"
          value={formatDate(data?.start_date)}
          isPending={isLoading}
        />

        <DetailItem
          label="Ngày kết thúc"
          value={formatDate(data?.end_date)}
          isPending={isLoading}
        />
      </Stack>

      <Stack direction="row" spacing={5} mt={2}>
        <BoxManager
          icon="/assets/imgs/engineer.png"
          title="Lập kế hoạch cho công trình"
          pathName="plan"
        />
        <BoxManager icon="/assets/imgs/engineer.png" title="Quản lý vật tư" pathName="material" />
        <BoxManager
          icon="/assets/imgs/manager.png"
          title="Quản lý trang thiết bị"
          bgColor={green[200]}
          pathName="equipment"
        />
        <BoxManager
          icon="/assets/imgs/construction.png"
          title="Quản lý công suất"
          bgColor={red[300]}
          pathName={`project/${projectId}/capacity`}
        />
      </Stack>
    </DetailLayout>
  )
}

export { ProjectDetail }
