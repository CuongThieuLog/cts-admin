import { updateUser } from '@/libs/api/user'
import { useMutation } from '@tanstack/react-query'

export function useUpdateUser() {
  const mutate = useMutation({
    mutationFn: updateUser,
  })

  return mutate
}
