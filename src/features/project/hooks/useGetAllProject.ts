import { getAllProjects } from '@/libs/api/project'
import { useQuery } from '@tanstack/react-query'

export const useGetAllProject = () => {
  const data = useQuery({
    queryKey: ['all/project'],
    queryFn: getAllProjects,
  })

  return data
}
