import { EquipmentFilter } from '@/features/project/views/Equiment'
import { EquipmentListMain } from '@/features/project/views/Equiment/EquipmentListMain'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <EquipmentFilter />
      <EquipmentListMain />
    </TableProvider>
  )
}
