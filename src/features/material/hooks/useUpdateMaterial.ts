import { updateMaterial } from '@/libs/api/material'
import { useMutation } from '@tanstack/react-query'

export function useUpdateMaterial() {
  const mutate = useMutation({
    mutationFn: updateMaterial,
  })

  return mutate
}
