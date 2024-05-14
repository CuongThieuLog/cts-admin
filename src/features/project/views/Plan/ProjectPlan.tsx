'use client'

import { ReactTable } from '@/libs/components/Table'
import { formatDate } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { useParams, useRouter } from 'next/navigation'
import { useGetListPlan } from '../../hooks/useGetListPlan'
import { PlanType } from '../../type'

const ProjectPlan = () => {
  const { projectId } = useParams()
  const { tableData } = useGetListPlan(String(projectId))
  const router = useRouter()

  const columns: ColumnDef<PlanType>[] = [
    {
      id: 'id',
      header: 'Mã kế hoạch',
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
      header: 'Tên kế hoạch',
      accessorKey: 'plan_name',
      meta: {
        width: 200,
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
      header: 'Ngày bắt đầu',
      accessorKey: 'start_date',
      meta: {
        width: 200,
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
      cell: ({ row }) => {
        return row.original.start_date ? formatDate(row.original.start_date) : '-'
      },
    },
    {
      header: 'Ngày kết thúc',
      accessorKey: 'deadline',
      meta: {
        width: 200,
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
      cell: ({ row }) => {
        return row.original.deadline ? formatDate(row.original.deadline) : '-'
      },
    },
    {
      header: 'Dự án',
      accessorKey: 'project_id',
      meta: {
        width: 200,
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
      cell: ({ row }) => {
        return row.original.project_id ? row.original.project_id.project_name : '-'
      },
    },
    {
      header: 'Đánh giá',
      accessorKey: 'evaluation',
      meta: {
        width: 200,
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
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (row) => {
          router.push(`plan/${row}/edit`)
        },
      }}
    />
  )
}

export { ProjectPlan }
