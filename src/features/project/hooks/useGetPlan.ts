import { getDetailPlan } from '@/libs/api/project'
import { useQuery } from '@tanstack/react-query'

export function useGetPlan(planId: string) {
  const data = useQuery({
    queryKey: ['plan', planId],
    queryFn: () => getDetailPlan(planId),
    enabled: !!planId,
  })

  return data
}
