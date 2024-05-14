'use client'

import { DetailItem } from '@/libs/components/DetailItem'
import { DetailLayout } from '@/libs/components/Layout'
import { formatDate, formatNumber } from '@/utils/format'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useDeleteReport, useGetReport } from '../hooks'

const ReportDetail = () => {
  const { reportId } = useParams()
  const { data, isLoading } = useGetReport(reportId as string)
  const router = useRouter()
  const { mutate } = useDeleteReport()
  const handleDelete = () => {
    mutate(reportId as string, {
      onSuccess: () => {
        toast.success('Xóa báo cáo thành công')
        router.push('/report')
      },
      onError: () => {
        toast.error('Xóa báo cáo thất bại')
      },
    })
  }

  return (
    <DetailLayout deleteFunction={handleDelete}>
      <Stack spacing={1}>
        <DetailItem label="Mã báo cáo" isPending={isLoading} value={data?._id} />
        <DetailItem label="Mã dự án" isPending={isLoading} value={data?.project} />
        <DetailItem
          label="Ngày báo cáo"
          isPending={isLoading}
          value={data?.report_date ? formatDate(data?.report_date) : '-'}
        />

        <DetailItem
          label="Chi phí thực tế"
          isPending={isLoading}
          value={data?.actual_cost ? `${formatNumber(data?.actual_cost)}đ` : '-'}
        />

        <DetailItem
          label="Tiến độ"
          isPending={isLoading}
          value={data?.progress ? `${formatNumber(data?.progress)}%` : '-'}
        />
      </Stack>
    </DetailLayout>
  )
}

export { ReportDetail }
