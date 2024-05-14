'use client'

import { exportExcelProject } from '@/libs/api/project'
import { FilterBar, FilterColumn } from '@/libs/components/Table/FilterBar'
import { ExVoid } from '@/libs/types/utils'
import { ProjectParamsType } from '../type'

export function ProjectFilter() {
  const handleExportCsv = async () => {
    await exportExcelProject()
  }

  const filterColumn: FilterColumn<ExVoid<ProjectParamsType>>[] = [
    {
      field: 'project_name',
      type: 'text',
      placeholder: 'Tên dự án',
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
      createPath="/project/create"
      exportCsv={{
        isLoading: false,
        onExportCsv: handleExportCsv,
      }}
    />
  )
}
