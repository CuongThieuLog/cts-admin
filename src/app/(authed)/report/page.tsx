import { ReportList } from '@/features/report'
import { ReportFilter } from '@/features/report/views/ReportFilter'
import { TableProvider } from '@/libs/components/Table'

export default function Page() {
  return (
    <TableProvider>
      <ReportFilter />
      <ReportList />
    </TableProvider>
  )
}
