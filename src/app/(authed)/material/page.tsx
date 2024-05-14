import { MaterialFilter, MaterialList } from '@/features/material'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <MaterialFilter />
      <MaterialList />
    </TableProvider>
  )
}
