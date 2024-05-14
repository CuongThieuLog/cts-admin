import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vật tư',
  description: 'Vật tư',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
