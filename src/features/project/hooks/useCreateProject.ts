import { createProject } from '@/libs/api/project'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export function useCreateProject() {
  const mutate = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast.success('Tạo công trình thành công')
    },
    onError: (error) => {
      toast.error('Tạo công trình thất bại')
    },
  })

  return mutate
}
