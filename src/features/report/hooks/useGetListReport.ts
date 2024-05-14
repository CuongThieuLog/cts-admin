import { ReportParamsType, ReportType } from '@/features/report'
import { getReports } from '@/libs/api/report'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'

export function useGetListReport() {
  const { input, getTableData } = useTableContext<ReportType, ReportParamsType>()
  const { page, limit } = input

  const data = useQuery({
    queryKey: ['report', page, limit],
    queryFn: () =>
      getReports({
        page,
        limit,
      }),
  })

  return {
    tableData: getTableData(data),
  }
}
