import { getReport } from '@/libs/api/report'
import { useQuery } from '@tanstack/react-query'

export function useGetReport(reportId: string) {
  const data = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(reportId),
    enabled: !!reportId,
  })

  return data
}
