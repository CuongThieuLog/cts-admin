import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Danh sách kế hoạch cho công trình',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
