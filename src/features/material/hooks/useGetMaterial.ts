import { getMaterial } from '@/libs/api/material'
import { useQuery } from '@tanstack/react-query'

export function useGetMaterial(materialId: string) {
  const data = useQuery({
    queryKey: ['material', materialId],
    queryFn: () => getMaterial(materialId),
    enabled: !!materialId,
  })

  return data
}
