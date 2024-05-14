'use client'

import { MaterialType } from '@/features/material'
import { useGetListMaterialByProjectId } from '@/features/material/hooks'
import { ReactTable } from '@/libs/components/Table'
import { formatDate, formatNumber } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { useParams, useRouter } from 'next/navigation'

const MaterialList = () => {
  const router = useRouter()
  const { projectId } = useParams()
  const { tableData } = useGetListMaterialByProjectId(String(projectId))

  const columns: ColumnDef<MaterialType>[] = [
    {
      id: 'id',
      header: 'Mã vật tư',
      accessorKey: '_id',
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
      accessorKey: 'material_name',
      header: 'Tên vật tư',
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
      header: 'Số lượng có sẵn',
      accessorKey: 'quantity_available',
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
      cell: ({ row }) =>
        row.original.quantity_availiable ? formatNumber(row.original.quantity_availiable) : '-',
    },
    {
      header: 'Đơn giá',
      accessorKey: 'unit_price',
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
      cell: ({ row }) => (row.original.unit_price ? formatNumber(row.original.unit_price) : '-'),
    },
    {
      header: 'Ngày tạo',
      accessorKey: 'createdAt',
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
      cell: ({ row }) => (row.original.createdAt ? formatDate(row.original.createdAt) : '-'),
    },
    {
      header: 'Ngày cập nhật',
      accessorKey: 'updatedAt',
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
      cell: ({ row }) => (row.original.updatedAt ? formatDate(row.original.updatedAt) : '-'),
    },
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (id) => {
          router.push(`material/${id}/edit`)
        },
      }}
    />
  )
}

export { MaterialList }
