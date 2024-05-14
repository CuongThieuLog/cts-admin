'use client'

import { DetailItem } from '@/libs/components/DetailItem'
import { DetailLayout } from '@/libs/components/Layout'
import { formatDate, formatNumber } from '@/utils/format'
import { Stack } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useDeleteMaterial, useGetMaterial } from '../hooks'

const MaterialDetail = () => {
  const { materialId } = useParams()
  const { data, isLoading } = useGetMaterial(materialId as string)
  const { mutate } = useDeleteMaterial()
  const router = useRouter()

  const handleDelete = () => {
    mutate(materialId as string, {
      onSuccess: () => {
        toast.success('Xóa vật tư thành công')
        router.push('/material')
      },
      onError: () => {
        toast.error('Xóa vật tư thất bại')
      },
    })
  }

  return (
    <DetailLayout deleteFunction={handleDelete}>
      <Stack spacing={1}>
        <DetailItem label="Mã vật tư" value={data?._id} isPending={isLoading} />
        <DetailItem label="Tên vật tư" value={data?.material_name} isPending={isLoading} />
        <DetailItem
          label="Số lượng có sẵn"
          value={
            data?.quantity_availiable ? formatNumber(data?.quantity_availiable) : 'Không có dữ liệu'
          }
          isPending={isLoading}
        />
        <DetailItem
          label="Đơn giá"
          value={data?.unit_price ? formatNumber(data?.unit_price) : 'Không có dữ liệu'}
          isPending={isLoading}
        />
        <DetailItem
          label="Ngày tạo"
          value={data?.createdAt ? formatDate(data?.createdAt) : 'Không có dữ liệu'}
          isPending={isLoading}
        />
        <DetailItem
          label="Ngày cập nhật"
          value={data?.updatedAt ? formatDate(data?.updatedAt) : 'Không có dữ liệu'}
          isPending={isLoading}
        />
      </Stack>
    </DetailLayout>
  )
}

export { MaterialDetail }
