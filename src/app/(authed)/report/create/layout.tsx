import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thêm mới',
  description: 'Thêm mới',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
