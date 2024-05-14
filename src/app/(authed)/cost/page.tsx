import { CostFilter, CostList } from '@/features/cost'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <CostFilter />
      <CostList />
    </TableProvider>
  )
}
