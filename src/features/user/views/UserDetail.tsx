'use client'

import { DetailItem } from '@/libs/components/DetailItem'
import { DetailLayout } from '@/libs/components/Layout'
import { formatNumber } from '@/utils/format'
import { Stack } from '@mui/material'
import { useParams } from 'next/navigation'
import { useGetUser } from '../hooks'
import { POSITION_OPTIONS } from './UserFilter'

const UserDetail = () => {
  const { userId } = useParams()
  const { data, isLoading } = useGetUser(userId as string)
  const { firstName, lastName, address, dob, gender, phone } = data?.labor_id.information_id || {}

  return (
    <DetailLayout>
      <Stack spacing={1}>
        <DetailItem label="Email" value={data?.email} isPending={isLoading} />
        <DetailItem
          label="Tên nhân công"
          value={`${firstName} ${lastName}`}
          isPending={isLoading}
        />
        <DetailItem
          label="Vai trò"
          value={
            data?.role
              ? POSITION_OPTIONS.find((item) => item.value === String(data.role))?.label
              : '-'
          }
          isPending={isLoading}
        />
        <DetailItem label="Vị trí" value={data?.labor_id.position || '-'} isPending={isLoading} />
        <DetailItem
          label="Lương theo giờ"
          value={data?.labor_id.rate_per_hour ? formatNumber(data.labor_id.rate_per_hour) : '-'}
          isPending={isLoading}
        />
      </Stack>
    </DetailLayout>
  )
}

export { UserDetail }
