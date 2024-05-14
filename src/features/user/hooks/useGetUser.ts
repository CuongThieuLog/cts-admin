import { getUser } from '@/libs/api/user'
import { useQuery } from '@tanstack/react-query'

export function useGetUser(userId: string) {
  const data = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    enabled: !!userId,
  })

  return data
}
