import { createCost } from '@/libs/api/cost'
import { useMutation } from '@tanstack/react-query'

export function useCreateCost() {
  const mutate = useMutation({
    mutationFn: createCost,
  })

  return mutate
}
