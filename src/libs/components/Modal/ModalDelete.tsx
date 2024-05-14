import { base } from '@/libs/config/theme'
import { Box, IconButton, Modal as MuiModal, Stack, Typography, styled } from '@mui/material'
import CloseIcon from 'public/assets/svgs/close.svg'
import TrashIcon from 'public/assets/svgs/delete_modal.svg'
import React from 'react'
import { ButtonConfirm, ButtonModal } from './styled'

type ModalProps = {
  open: boolean
  handleCloseModal: () => void
  handleSubmit: () => void
  isLoading?: boolean
  title: string
  description?: string
  textSubmit: string
  textCancel?: string
}

const ModalDelete: React.FC<ModalProps> = ({
  open,
  handleCloseModal,
  handleSubmit,
  isLoading = false,
  title,
  textSubmit,
  description,
  textCancel,
}: ModalProps) => {
  return (
    <MuiModal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
      sx={{
        backgroundColor: base.bg_dark,
      }}
    >
      <BoxContainer sx={{ width: 400 }}>
        <Stack alignItems="flex-end">
          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack alignItems="center" spacing={5}>
          <Stack spacing={4} textAlign="center" justifyContent="center" alignItems="center">
            <TrashIcon />

            <Stack spacing={1}>
              <Typography variant="h3" color="black" whiteSpace="wrap">
                {title}
              </Typography>

              <Typography
                variant="h4"
                fontWeight={400}
                color="mono.500"
                width="100%"
                sx={{ wordBreak: 'break-word' }}
              >
                {description}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="center" width="100%" spacing={2}>
            <ButtonModal
              variant="outlined"
              disabled={isLoading}
              onClick={handleCloseModal}
              sx={{ width: 120 }}
            >
              {textCancel ? textCancel : 'キャンセル'}
            </ButtonModal>

            <ButtonConfirm
              variant="contained"
              disabled={isLoading}
              onClick={handleSubmit}
              sx={{ width: 120 }}
            >
              {textSubmit}
            </ButtonConfirm>
          </Stack>
        </Stack>
      </BoxContainer>
    </MuiModal>
  )
}

export { ModalDelete }

const BoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 230,
  boxShadow: theme.shadows[1],
  borderRadius: 16,
  padding: 20,
  background: theme.palette.base.white,
}))
