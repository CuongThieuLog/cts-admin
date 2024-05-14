import { EquipmentFilter, EquipmentList } from '@/features/project/views/Equiment'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <EquipmentFilter />
      <EquipmentList />
    </TableProvider>
  )
}
