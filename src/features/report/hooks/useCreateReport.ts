import { createReport } from '@/libs/api/report'
import { useMutation } from '@tanstack/react-query'

export function useCreateReport() {
  const mutate = useMutation({
    mutationFn: createReport,
  })

  return mutate
}
