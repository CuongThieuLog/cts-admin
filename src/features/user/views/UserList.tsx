'use client'

import { ReactTable } from '@/libs/components/Table'
import { formatNumber } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { useGetListProject } from '../hooks'
import { UserType } from '../type'
import { POSITION_OPTIONS } from './UserFilter'

const UserList = () => {
  const router = useRouter()
  const { tableData } = useGetListProject()

  const columns: ColumnDef<UserType>[] = [
    {
      header: 'Mã nhân công',
      accessorKey: 'labor_id._id',
      meta: {
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          padding: '0 8px',
        },
      },
    },
    {
      id: 'id',
      header: 'Số điện thoại',
      accessorKey: 'labor_id.information_id.phone',
      meta: {
        width: 300,
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          textAlign: 'left',
          fontWeight: 400,
          padding: '0 8px',
        },
      },
    },

    {
      header: 'Email',
      accessorKey: 'email',
      meta: {
        width: 200,
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          padding: '0 8px',
        },
      },
    },
    {
      header: 'Vai trò',
      accessorKey: 'labor_id.role',
      meta: {
        width: 200,
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          padding: '0 8px',
        },
      },
      cell: ({ row }) => {
        return row.original.role
          ? POSITION_OPTIONS.find((item) => item.value === String(row.original?.role))?.label
          : '-'
      },
    },

    {
      header: 'Tên nhân công',
      accessorKey: 'labor_id.information_id.firstName',
      meta: {
        width: 200,
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          padding: '0 8px',
        },
      },
      cell: ({ row }) => {
        const { firstName, lastName } = row.original.labor_id?.information_id || {
          firstName: '',
          lastName: '',
        }

        return firstName && lastName ? `${firstName} ${lastName}` : '-'
      },
    },
    {
      header: 'Chức vụ',
      accessorKey: 'labor_id.position',
      meta: {
        width: 140,
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          padding: '0 8px',
        },
      },
      cell: ({ row }) => {
        return row.original.labor_id?.position || '-'
      },
    },
    {
      header: 'Giá trên mỗi giờ',
      accessorKey: 'labor.rate_per_hour',
      meta: {
        width: 120,
        headStyle: {
          padding: '0 8px',
        },
        cellStyle: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          padding: '0 8px',
        },
      },

      cell: ({ row }) => {
        return row.original.labor_id?.rate_per_hour
          ? `${formatNumber(row.original.labor_id.rate_per_hour)}đ/h`
          : '-'
      },
    },
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (id) => {
          router.push(`/user/${id}/detail`)
        },
      }}
    />
  )
}

export { UserList }
