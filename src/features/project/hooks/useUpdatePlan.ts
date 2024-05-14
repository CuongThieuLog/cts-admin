import { updatePlan } from '@/libs/api/project'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export function useUpdatePlan() {
  const mutate = useMutation({
    mutationFn: updatePlan,
    onSuccess: () => {
      toast.success('Cập nhật kế hoạch thành công')
    },
    onError: (error) => {
      toast.error('Cập nhật kế hoạch thất bại')
    },
  })

  return mutate
}
