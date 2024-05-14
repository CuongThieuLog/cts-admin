'use client'

import { black, primary } from '@/libs/config/theme'
import { Box, Button, IconButton, Stack, styled } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import DeleteIcon from 'public/assets/svgs/delete_detail.svg'
import EditIcon from 'public/assets/svgs/edit_detail.svg'
import ReturnIcon from 'public/assets/svgs/return.svg'
import { useState } from 'react'
import { ModalDelete } from '../../Modal/ModalDelete'

interface DetailLayoutProps {
  children: React.ReactNode
  deleteFunction?: () => void
  returnPath?: string
  editPath?: string
}

const DetailLayout = ({ children, deleteFunction, editPath, returnPath }: DetailLayoutProps) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleDelete = () => {
    if (deleteFunction) {
      deleteFunction()
    }
  }

  const router = useRouter()
  const pathName = usePathname()
  const returnFunction = () => {
    if (returnPath) {
      router.push(returnPath)
    }

    router.back()
  }

  const editFunction = () => {
    if (editPath) {
      router.push(editPath)
    }

    const path = pathName.replace('detail', 'edit')
    router.push(path)
  }

  return (
    <Box
      border={`1px solid ${black[200]}`}
      minHeight={`calc(100vh - 120px)`}
      sx={{ borderTopLeftRadius: 10, borderEndStartRadius: 10 }}
      bgcolor="white"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={`1px solid ${black[200]}`}
        px={2}
        py={1}
      >
        <IconButton onClick={returnFunction}>
          <ReturnIcon />
        </IconButton>

        <Stack direction="row" spacing={2}>
          <ButtonDelete
            variant="outlined"
            color="primary"
            startIcon={<DeleteIcon />}
            onClick={handleOpenModal}
          >
            Xoá
          </ButtonDelete>

          <ButtonEdit
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            onClick={editFunction}
          >
            Chỉnh sửa
          </ButtonEdit>
        </Stack>
      </Stack>

      <Box p={2} height="auto">
        <Box minHeight="fit-content" borderRadius={1} p={2}>
          {children}
        </Box>
      </Box>

      <ModalDelete
        open={openModal}
        title="Xác nhận xoá"
        description="Bạn có chắc chắn muốn xoá không?"
        handleCloseModal={handleCloseModal}
        handleSubmit={handleDelete}
        textSubmit="Xoá"
        textCancel="Hủy"
      />
    </Box>
  )
}

export { DetailLayout }

export const ButtonEdit = styled(Button)({
  borderRadius: 10,
  background: primary[700],
  color: 'white',
  '&:hover': {
    background: primary[700],
    color: 'white',
  },
  '&:focus': {
    background: primary[700],
    color: 'white',
  },
})

const ButtonDelete = styled(Button)({
  borderRadius: 10,
  background: black[100],
  borderColor: black[100],
  color: black[500],
  '&:hover': {
    background: black[100],
    color: black[500],
    borderColor: black[100],
  },
})
