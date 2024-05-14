import { getAllLabor, getAllUserProjectManager } from '@/libs/api/user'
import { useQuery } from '@tanstack/react-query'

export const useGetAllUser = () => {
  const data = useQuery({
    queryKey: ['all/labor'],
    queryFn: getAllLabor,
  })

  return data
}

export const useGetAllUserProjectManager = () => {
  const data = useQuery({
    queryKey: ['all/labor/project-manager'],
    queryFn: getAllUserProjectManager,
  })

  const projectManager =
    data.data?.map((item) => ({
      label: item.labor_id.information_id.firstName + ' ' + item.labor_id.information_id.lastName,
      value: item._id,
    })) || []

  return { projectManager }
}
