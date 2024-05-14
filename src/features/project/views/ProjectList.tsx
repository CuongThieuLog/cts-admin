'use client'

import { ReactTable } from '@/libs/components/Table'
import { formatDate, formatNumber } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { useGetListProject } from '../hooks'
import { ProjectType } from '../type'

const ProjectList = () => {
  const router = useRouter()
  const { tableData } = useGetListProject()

  const columns: ColumnDef<ProjectType>[] = [
    {
      id: 'id',
      header: 'Mã công trình',
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
      header: 'Tên công trình',
      accessorKey: 'project_name',
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
      header: 'Người quản lý dự án',
      accessorKey: 'project_manager',
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
      header: 'Ngân sách đề ra',
      accessorKey: 'budget',
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
        return formatNumber(row.original.budget)
      },
    },
    {
      header: 'Ngày bắt đầu',
      accessorKey: 'start_date',
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
        return formatDate(row.original.start_date)
      },
    },
    {
      header: 'Ngày kết thúc',
      accessorKey: 'end_date',
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
        return formatDate(row.original.end_date)
      },
    },
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (id) => {
          router.push(`/project/${id}/detail`)
        },
      }}
    />
  )
}

export { ProjectList }
