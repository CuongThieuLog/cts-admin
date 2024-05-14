'use client'

import { exportExcelProject } from '@/libs/api/project'
import { FilterBar, FilterColumn } from '@/libs/components/Table/FilterBar'
import { ExVoid } from '@/libs/types/utils'
import { useParams, useRouter } from 'next/navigation'
import { EquipmentParamsType } from './type'

export function EquipmentFilter() {
  const handleExportCsv = async () => {
    await exportExcelProject()
  }
  const router = useRouter()
  const returnFunction = () => {
    router.back()
  }
  const { projectId } = useParams()

  const filterColumn: FilterColumn<ExVoid<EquipmentParamsType>>[] = [
    {
      field: 'equipment_name',
      type: 'text',
      placeholder: 'Tên thiết bị',
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
      createPath="equipment/create"
      exportCsv={{
        isLoading: false,
        onExportCsv: handleExportCsv,
      }}
      onBack={projectId ? returnFunction : undefined}
    />
  )
}
