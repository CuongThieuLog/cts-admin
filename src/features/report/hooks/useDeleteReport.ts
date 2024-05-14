import { deleteReport } from '@/libs/api/report'
import { useMutation } from '@tanstack/react-query'

export const useDeleteReport = () => {
  const mutate = useMutation({
    mutationFn: deleteReport,
  })

  return mutate
}
