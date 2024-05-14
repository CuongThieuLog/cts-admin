import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lập kế hoạch cho công trình',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
