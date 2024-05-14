import { getCosts } from '@/libs/api/cost'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'
import { CostParamsType, CostType } from '../type'

export function useGetListCost() {
  const { input, getTableData } = useTableContext<CostType, CostParamsType>()
  const { page, limit } = input

  const data = useQuery({
    queryKey: ['cost', page, limit],
    queryFn: () =>
      getCosts({
        page,
        limit,
      }),
  })

  return {
    tableData: getTableData(data),
  }
}
