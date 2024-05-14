import { ProjectPlan, ProjectPlanFilter } from '@/features/project'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <ProjectPlanFilter />
      <ProjectPlan />
    </TableProvider>
  )
}
