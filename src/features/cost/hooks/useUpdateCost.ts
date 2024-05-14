import { updateCost } from '@/libs/api/cost'
import { useMutation } from '@tanstack/react-query'

export function useUpdateCost() {
  const mutate = useMutation({
    mutationFn: updateCost,
  })

  return mutate
}
