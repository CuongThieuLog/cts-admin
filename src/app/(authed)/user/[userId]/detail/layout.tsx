import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi tiết',
  description: 'Chi tiết',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
