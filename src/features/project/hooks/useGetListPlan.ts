import { getPlansByProject } from '@/libs/api/project'
import { useTableContext } from '@/libs/components/Table'
import { useQuery } from '@tanstack/react-query'
import { PlanParamsType, PlanType } from '../type'

export function useGetListPlan(projectId: string) {
  const { input, getTableData } = useTableContext<PlanType, PlanParamsType>()
  const { page, limit, plan_name } = input

  const data = useQuery({
    queryKey: ['project', 'list-plan', page, limit, plan_name, projectId],
    queryFn: () => getPlansByProject({ page, limit, plan_name, project_id: projectId }),
  })

  return {
    tableData: getTableData(data),
  }
}
