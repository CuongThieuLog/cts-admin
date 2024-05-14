import { deleteProject } from '@/libs/api/project'
import { useMutation } from '@tanstack/react-query'

export const useDeleteProject = () => {
  const mutate = useMutation({
    mutationFn: deleteProject,
  })

  return mutate
}
