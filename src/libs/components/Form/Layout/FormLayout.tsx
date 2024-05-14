'use client'

'use client'

import { black, primary } from '@/libs/config/theme'
import { Box, Button, IconButton, Stack, Typography, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import CloseIcon from 'public/assets/svgs/close.svg'
import CreateIcon from 'public/assets/svgs/create.svg'
import EditIcon from 'public/assets/svgs/edit_detail.svg'
import ReturnIcon from 'public/assets/svgs/return.svg'
import { FormSkeleton, FormSkeletonProps } from '../../Skeleton'

interface FormLayoutProps {
  children: React.ReactNode
  isLoading?: boolean
  skeleton?: FormSkeletonProps
  closePath?: string
  returnPath?: string
  onSubmit?: () => void
  title?: string
  isEdit?: boolean
  customButton?: React.ReactNode
}

const FormLayout = ({
  children,
  closePath,
  returnPath,
  isLoading,
  skeleton,
  onSubmit,
  title,
  isEdit,
  customButton,
}: FormLayoutProps) => {
  const router = useRouter()
  const returnFunction = () => {
    if (returnPath) {
      router.push(returnPath)
    }

    router.back()
  }

  const closeFunction = () => {
    if (closePath) {
      router.push(closePath)
    }

    router.back()
  }

  if (isLoading) return <FormSkeleton {...skeleton} />

  return (
    <Box
      border={`1px solid ${black[200]}`}
      minHeight={`calc(100vh - 120px)`}
      sx={{ borderTopLeftRadius: 10, borderEndStartRadius: 10 }}
      bgcolor="white"
      component="form"
      onSubmit={onSubmit}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={`1px solid ${black[200]}`}
        px={2}
        py={1}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={returnFunction}>
            <ReturnIcon />
          </IconButton>

          <Typography variant="body1">{title || 'Thêm mới'}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <ButtonDelete
            variant="outlined"
            color="primary"
            startIcon={<CloseIcon />}
            onClick={closeFunction}
          >
            Huỷ
          </ButtonDelete>

          {customButton}

          {isEdit ? (
            <ButtonEdit variant="contained" color="primary" startIcon={<EditIcon />} type="submit">
              Cập nhật
            </ButtonEdit>
          ) : (
            <ButtonEdit
              variant="contained"
              color="primary"
              startIcon={<CreateIcon />}
              type="submit"
            >
              Tạo mới
            </ButtonEdit>
          )}
        </Stack>
      </Stack>

      <Box p={2} height="auto">
        <Box minHeight="fit-content" borderRadius={1} p={2}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export { FormLayout }

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
