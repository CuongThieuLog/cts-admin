import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi tiết công trình',
  description: 'Chi tiết công trình',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
