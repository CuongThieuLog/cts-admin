import { updateEquipment } from '@/libs/api/equipment'
import { useMutation } from '@tanstack/react-query'

export const useUpdateEquipment = () => {
  const mutation = useMutation({
    mutationFn: updateEquipment,
  })

  return mutation
}
