'use client'

import { useAuth } from '@/libs/context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Loading } from '../Loading'

const LayoutUnAuth = ({ children }: { children: React.ReactNode }) => {
  const { admin, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (admin && !loading) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin, loading])

  return loading || admin ? <Loading /> : children
}

export { LayoutUnAuth }
