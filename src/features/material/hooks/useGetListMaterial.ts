import { MaterialParamsType, MaterialType } from '@/features/material'
import { getMaterials } from '@/libs/api/material'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'

export function useGetListMaterial() {
  const { input, getTableData } = useTableContext<MaterialType, MaterialParamsType>()
  const { page, limit, material_name } = input

  const data = useQuery({
    queryKey: ['project', page, limit, material_name],
    queryFn: () =>
      getMaterials({
        page,
        limit,
        material_name,
      }),
  })

  return {
    tableData: getTableData(data),
  }
}
