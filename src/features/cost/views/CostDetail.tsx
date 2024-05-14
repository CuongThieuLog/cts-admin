'use client'

import { DetailItem } from '@/libs/components/DetailItem'
import { DetailLayout } from '@/libs/components/Layout'
import { formatDate, formatNumber } from '@/utils/format'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useDeleteCost, useGetCost } from '../hooks'

const CostDetail = () => {
  const { costId } = useParams()
  const { data, isLoading } = useGetCost(costId as string)
  const router = useRouter()
  const { mutate } = useDeleteCost()
  const handleDelete = () => {
    mutate(costId as string, {
      onSuccess: () => {
        toast.success('Xóa chi phí thành công')
        router.push('/cost')
      },
      onError: () => {
        toast.error('Xóa chi phí thất bại')
      },
    })
  }

  return (
    <DetailLayout deleteFunction={handleDelete}>
      <Stack spacing={1}>
        <DetailItem label="Mã chi phí" value={data?._id} isPending={isLoading} />
        <DetailItem label="Mã dự án" value={data?.project} isPending={isLoading} />
        <DetailItem label="Mã nhân công" value={data?.labor} isPending={isLoading} />
        <DetailItem label="Mã vật tư" value={data?.material} isPending={isLoading} />
        <DetailItem
          label="Ngày chi phí"
          value={data?.cost_date ? formatDate(data.cost_date) : '-'}
          isPending={isLoading}
        />
        <DetailItem
          label="Số tiền chi phí"
          value={data?.cost_amount ? `${formatNumber(data.cost_amount)} đ` : '-'}
          isPending={isLoading}
        />
      </Stack>
    </DetailLayout>
  )
}

export { CostDetail }
