import { deleteMaterial } from '@/libs/api/material'
import { useMutation } from '@tanstack/react-query'

export const useDeleteMaterial = () => {
  const mutate = useMutation({
    mutationFn: deleteMaterial,
  })

  return mutate
}
