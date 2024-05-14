import { getEquipments } from '@/libs/api/equipment'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'
import { EquipmentParamsType, EquipmentType } from '../type'

export const useGetListEquipment = () => {
  const { input, getTableData } = useTableContext<EquipmentType, EquipmentParamsType>()
  const { page, limit, equipment_name } = input

  const data = useQuery({
    queryKey: ['equipment', 'list-equipment', page, limit, equipment_name],
    queryFn: () => getEquipments({ page, limit, equipment_name }),
  })

  return {
    tableData: getTableData(data),
  }
}
