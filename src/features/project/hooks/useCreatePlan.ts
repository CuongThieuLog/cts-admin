import { createPlan } from '@/libs/api/project'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export function useCreatePlan() {
  const mutate = useMutation({
    mutationFn: createPlan,
    onSuccess: () => {
      toast.success('Tạo kế hoạch thành công')
    },
    onError: (error) => {
      toast.error('Tạo kế hoạch thất bại')
    },
  })

  return mutate
}
