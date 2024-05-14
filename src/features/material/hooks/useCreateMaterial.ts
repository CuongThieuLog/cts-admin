import { createMaterial } from '@/libs/api/material'
import { useMutation } from '@tanstack/react-query'

export function useCreateMaterial() {
  const mutate = useMutation({
    mutationFn: createMaterial,
  })

  return mutate
}
