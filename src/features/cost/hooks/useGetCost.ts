import { getCost } from '@/libs/api/cost'
import { useQuery } from '@tanstack/react-query'

export function useGetCost(costId: string) {
  const data = useQuery({
    queryKey: ['cost', costId],
    queryFn: () => getCost(costId),
    enabled: !!costId,
  })

  return data
}
