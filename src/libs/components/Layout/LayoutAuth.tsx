'use client'

import { black } from '@/libs/config/theme'
import { useAuth } from '@/libs/context'
import { Box, BoxProps, Stack, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Loading } from '../Loading'
import { Header } from './Header'
import { SIDE_BAR_WIDTH, Sidebar } from './Sidebar'

type LayoutType = BoxProps<
  'div',
  {
    children: React.ReactNode
    HeaderComponent?: React.ReactNode
    disableSidebar?: boolean
  }
>

const LayoutAuth: React.FC<LayoutType> = ({
  children,
  HeaderComponent,
  disableSidebar = false,
  ...contentProps
}) => {
  const { admin, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!admin && !loading) {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin, loading])

  if (loading || !admin) return <Loading />

  return (
    <Stack direction="row" spacing={0}>
      {!disableSidebar && <Sidebar />}
      <Stack>
        <Header />
        <ContentPage {...contentProps}>{children}</ContentPage>
      </Stack>
    </Stack>
  )
}

export { LayoutAuth }

const ContentPage = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: `calc(100vw - ${257}px)`,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  marginLeft: SIDE_BAR_WIDTH,
  backgroundColor: black[100],
  padding: theme.spacing(3, 0, 3, 3),
  paddingTop: 80,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}))
