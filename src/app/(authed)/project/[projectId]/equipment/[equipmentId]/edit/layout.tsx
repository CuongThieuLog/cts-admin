import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chỉnh sửa thiết bị cho công trình',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
