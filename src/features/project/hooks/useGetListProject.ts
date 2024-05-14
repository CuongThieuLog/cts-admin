import { getProjects } from '@/libs/api/project'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'
import { ProjectParamsType, ProjectType } from '../type'

export function useGetListProject() {
  const { input, getTableData } = useTableContext<ProjectType, ProjectParamsType>()
  const { page, limit, project_name } = input

  const data = useQuery({
    queryKey: ['project', page, limit, project_name],
    queryFn: () => getProjects({ page, limit, project_name }),
  })

  return {
    tableData: getTableData(data),
  }
}
