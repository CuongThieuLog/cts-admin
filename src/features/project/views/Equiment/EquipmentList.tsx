'use client'

import { ReactTable } from '@/libs/components/Table'
import { ColumnDef } from '@tanstack/react-table'
import { useParams, useRouter } from 'next/navigation'
import { useGetListEquipmentByProjectId } from './hooks/useGetListEquimentByProjectId'
import { EquipmentType } from './type'

const EquipmentList = () => {
  const { projectId } = useParams()
  const { tableData } = useGetListEquipmentByProjectId(String(projectId))
  const router = useRouter()

  const columns: ColumnDef<EquipmentType>[] = [
    {
      id: 'id',
      header: 'Mã trang thiết bị',
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
      header: 'Tên trang thiết bị',
      accessorKey: 'equipment_name',
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
      header: 'Chi tiết',
      accessorKey: 'description',
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
      header: 'Số lượng',
      accessorKey: 'quantity',
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
      cell: ({ row }) => (row.original.project_id ? row.original.project_id.project_name : '-'),
    },
  ]

  return (
    <ReactTable
      {...tableData}
      columns={columns}
      action={{
        onDetail: (row) => {
          router.push(`equipment/${row}/edit`)
        },
      }}
    />
  )
}

export { EquipmentList }
