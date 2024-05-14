'use client'

import { ReportType } from '@/features/report'
import { ReactTable } from '@/libs/components/Table'
import { formatDate, formatNumber } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { useGetListReport } from '../hooks/useGetListReport'

const ReportList = () => {
  const router = useRouter()
  const { tableData } = useGetListReport()

  const columns: ColumnDef<ReportType>[] = [
    {
      id: 'id',
      header: 'Mã báo cáo',
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
      accessorKey: 'project',
      header: 'Mã dự án',
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
      header: 'Ngày báo cáo',
      accessorKey: 'report_date',
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
      cell: ({ row }) => (row.original.report_date ? formatDate(row.original.report_date) : '-'),
    },
    {
      header: 'Tiến độ',
      accessorKey: 'progress',
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
      cell: ({ row }) => (row.original.progress ? `${formatNumber(row.original.progress)}%` : '-'),
    },
    {
      header: 'Chi phí thực tế',
      accessorKey: 'actual_cost',
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
      cell: ({ row }) => (row.original.actual_cost ? formatNumber(row.original.actual_cost) : '-'),
    },
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (id) => {
          router.push(`/report/${id}/detail`)
        },
      }}
    />
  )
}

export { ReportList }
