import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thêm mới công trình',
  description: 'Thêm mới công trình',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
