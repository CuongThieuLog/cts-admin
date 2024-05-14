'use client'

import { exportExcelProject } from '@/libs/api/project'
import { FilterBar, FilterColumn } from '@/libs/components/Table/FilterBar'
import { ExVoid } from '@/libs/types/utils'
import { useRouter } from 'next/navigation'
import { PlanParamsType } from '../../type'

export function ProjectPlanFilter() {
  const handleExportCsv = async () => {
    await exportExcelProject()
  }
  const router = useRouter()
  const returnFunction = () => {
    router.back()
  }

  const filterColumn: FilterColumn<ExVoid<PlanParamsType>>[] = [
    {
      field: 'plan_name',
      type: 'text',
      placeholder: 'Tên kế hoạch',
      defaultValue: '',
      sx: {
        width: 320,
      },
      fieldOptions: {
        searchIcon: true,
      },
    },
  ]

  return (
    <FilterBar
      columns={filterColumn}
      createPath="plan/create"
      exportCsv={{
        isLoading: false,
        onExportCsv: handleExportCsv,
      }}
      onBack={returnFunction}
    />
  )
}
