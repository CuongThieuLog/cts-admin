import { LayoutUnAuth } from '@/libs/components/Layout'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LayoutUnAuth>{children}</LayoutUnAuth>
}
