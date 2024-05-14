'use client'

import { primary } from '@/libs/config/theme'
import { Button, Stack, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import AddIcon from 'public/assets/svgs/create.svg'

export function ReportFilter() {
  const router = useRouter()

  return (
    <Stack alignItems="flex-end" pr={3} mb={5}>
      <ButtonCreate
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          router.push('/report/create')
        }}
      >
        Tạo báo cáo
      </ButtonCreate>
    </Stack>
  )
}

const ButtonCreate = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  width: 180,
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
}))
