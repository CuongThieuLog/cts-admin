import { LayoutAuth } from '@/libs/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LayoutAuth>{children}</LayoutAuth>
}
