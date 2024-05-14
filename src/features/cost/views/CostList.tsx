'use client'

import { ReactTable } from '@/libs/components/Table'
import { formatDate, formatNumber } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { useGetListCost } from '../hooks'
import { CostType } from '../type'

const CostList = () => {
  const router = useRouter()
  const { tableData } = useGetListCost()

  const columns: ColumnDef<CostType>[] = [
    {
      id: 'id',
      header: 'Mã chi phí',
      accessorKey: '_id',
      meta: {
        width: 300,
        headStyle: {
          paddingLeft: '4px',
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
      header: 'Mã dự án',
      accessorKey: 'project',
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
      header: 'Mã nhân công',
      accessorKey: 'labor',
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
      header: 'Mã vật tư',
      accessorKey: 'material',
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
      header: 'Ngày chi phí',
      accessorKey: 'cost_date',
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
      cell: ({ row }) => {
        return row.original.cost_date ? formatDate(row.original.cost_date) : '-'
      },
    },
    {
      header: 'Số tiền chi phí',
      accessorKey: 'cost_amount',
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
        return row.original.cost_amount ? `${formatNumber(row.original.cost_amount)}đ` : '-'
      },
    },
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (id) => {
          router.push(`/cost/${id}/detail`)
        },
      }}
    />
  )
}

export { CostList }
