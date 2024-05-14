import { getAllMaterials } from '@/libs/api/material'
import { useQuery } from '@tanstack/react-query'

export const useGetAllMaterial = () => {
  const data = useQuery({
    queryKey: ['all/material'],
    queryFn: getAllMaterials,
  })

  return data
}
