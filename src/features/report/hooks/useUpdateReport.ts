import { updateReport } from '@/libs/api/report'
import { useMutation } from '@tanstack/react-query'

export function useUpdateReport() {
  const mutate = useMutation({
    mutationFn: updateReport,
  })

  return mutate
}
