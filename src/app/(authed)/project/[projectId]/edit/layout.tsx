import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chỉnh sửa',
  description: 'Chỉnh sửa',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
