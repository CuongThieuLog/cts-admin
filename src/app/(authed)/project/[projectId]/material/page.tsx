import { MaterialFilter, MaterialList } from '@/features/project/views/Material'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <MaterialFilter />
      <MaterialList />
    </TableProvider>
  )
}
