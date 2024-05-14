import { ProjectFilter, ProjectList } from '@/features/project'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <ProjectFilter />
      <ProjectList />
    </TableProvider>
  )
}
