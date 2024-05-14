import { updateProject } from '@/libs/api/project'
import { useMutation } from '@tanstack/react-query'

export function useUpdateProject() {
  const mutate = useMutation({
    mutationFn: updateProject,
  })

  return mutate
}
