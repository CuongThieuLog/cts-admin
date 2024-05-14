'use client'

import { MaterialParamsType } from '@/features/material'
import { FilterBar, FilterColumn } from '@/libs/components/Table/FilterBar'
import { ButtonSearch } from '@/libs/components/Table/styled'
import { ExVoid } from '@/libs/types/utils'
import { useRouter } from 'next/navigation'

export function MaterialFilter() {
  const router = useRouter()
  const backPage = () => {
    router.push('detail')
  }
  const handleExport = () => {
    console.log('Export')
  }

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
      createPath="material/create"
      onBack={backPage}
      exportCsv={{
        onExportCsv: handleExport,
        isLoading: false,
      }}
      customButton={<ButtonSearch variant="outlined">Cấp vật tư</ButtonSearch>}
    />
  )
}
