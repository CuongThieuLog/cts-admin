import { getEquipment } from '@/libs/api/equipment'
import { useQuery } from '@tanstack/react-query'

export const useGetEquipment = (equipmentId: string) => {
  const data = useQuery({
    queryKey: ['equipment'],
    queryFn: () => getEquipment(equipmentId),
    enabled: !!equipmentId,
  })

  return data
}
