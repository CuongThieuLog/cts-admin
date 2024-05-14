'use client'

import { FilterBar, FilterColumn } from '@/libs/components/Table/FilterBar'
import { ExVoid } from '@/libs/types/utils'
import { MaterialParamsType } from '../type'

export function MaterialFilter() {
  const filterColumn: FilterColumn<ExVoid<MaterialParamsType>>[] = [
    {
      field: 'material_name',
      type: 'text',
      placeholder: 'Tìm kiếm theo tên vật tư',
      label: 'Tên vật tư',
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
      createPath="/material/create"
      exportCsv={{
        onExportCsv: () => console.log('Export'),
        isLoading: false,
      }}
    />
  )
}
