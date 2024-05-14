import { getProject } from '@/libs/api/project'
import { useQuery } from '@tanstack/react-query'

export function useGetProject(projectId: string) {
  const data = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProject(projectId),
    enabled: !!projectId,
  })

  return data
}
