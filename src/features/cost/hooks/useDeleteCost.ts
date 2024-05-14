import { deleteCost } from '@/libs/api/cost'
import { useMutation } from '@tanstack/react-query'

export const useDeleteCost = () => {
  const mutate = useMutation({
    mutationFn: deleteCost,
  })

  return mutate
}
