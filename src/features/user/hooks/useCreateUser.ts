import { createUser } from '@/libs/api/user'
import { useMutation } from '@tanstack/react-query'

export function useCreateUser() {
  const mutate = useMutation({
    mutationFn: createUser,
  })

  return mutate
}
