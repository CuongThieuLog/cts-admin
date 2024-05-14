import { POSITION_OPTIONS, UserType } from '@/features/user'
import { useGetListLabor } from '@/features/user/hooks'
import { ReactTable } from '@/libs/components/Table'
import { formatNumber } from '@/utils/format'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Modal, Typography, styled } from '@mui/material'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LaborIdsSchema, LaborIdsType } from '../../type'

interface ModalLaborProps {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
}

const ModalLabor: React.FC<ModalLaborProps> = ({ handleClose, handleOpen, open }) => {
  const { handleSubmit } = useForm<LaborIdsType>({
    defaultValues: {
      laborIds: [],
    },
    values: {
      laborIds: ['6634f572f7a3deae40bb96be', '662c6c3f81c21742addfe7e2'],
    },
    resolver: zodResolver(LaborIdsSchema),
  })

  const onSubmit: SubmitHandler<LaborIdsType> = (data) => {
    console.log(data)
  }

  const { tableData } = useGetListLabor()

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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <BoxContainer component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h3" mb={3}>
          Danh sách nhân công trong công trình
        </Typography>

        <ReactTable {...tableData} columns={columns} selection />
      </BoxContainer>
    </Modal>
  )
}

export { ModalLabor }

const BoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  minHeight: '80%',
  boxShadow: theme.shadows[1],
  borderRadius: 2,
  padding: '48px 16px 24px 16px',
  background: theme.palette.base.white,
}))
