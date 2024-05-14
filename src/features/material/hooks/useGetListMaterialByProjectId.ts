import { MaterialParamsType, MaterialType } from '@/features/material'
import { getMaterialsByProject } from '@/libs/api/material'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'

export function useGetListMaterialByProjectId(projectId: string) {
  const { input, getTableData } = useTableContext<MaterialType, MaterialParamsType>()
  const { page, limit, material_name } = input

  const data = useQuery({
    queryKey: ['material', page, limit, material_name],
    queryFn: () =>
      getMaterialsByProject({
        params: {
          page,
          limit,
          material_name,
        },
        projectId,
      }),
  })

  return {
    tableData: getTableData(data),
  }
}
