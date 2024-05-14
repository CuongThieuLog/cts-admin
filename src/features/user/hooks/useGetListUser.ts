import { getUsers } from '@/libs/api/user'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'
import { UserParamsType, UserType } from '../type'

export function useGetListProject() {
  const { input, getTableData } = useTableContext<UserType, UserParamsType>()
  const { page, limit, username, role } = input

  const data = useQuery({
    queryKey: ['project', page, limit, username, role],
    queryFn: () =>
      getUsers({
        page,
        limit,
        username,
        role,
      }),
  })

  return {
    tableData: getTableData(data),
  }
}

export function useGetListLabor() {
  const { input, getTableData } = useTableContext<UserType, UserParamsType>()
  const { page, limit, username, role } = input

  const data = useQuery({
    queryKey: ['project', page, limit, username, role],
    queryFn: () =>
      getUsers({
        page,
        limit,
        username,
        role: '2',
      }),
  })

  return {
    tableData: getTableData(data),
  }
}
