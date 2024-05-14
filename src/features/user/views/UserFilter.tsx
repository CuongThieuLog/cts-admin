'use client'

import { getAllLabor } from '@/libs/api/user'
import { FilterBar, FilterColumn } from '@/libs/components/Table/FilterBar'
import { ExVoid } from '@/libs/types/utils'
import { format } from 'date-fns'
import { download, generateCsv, mkConfig } from 'export-to-csv'
import { useState } from 'react'
import { UserCsvType, UserParamsType } from '../type'

export type PositionType = '0' | '1' | '2'

export const POSITION_OPTIONS: {
  value: PositionType
  label: string
}[] = [
  { value: '0', label: 'Admin' },
  { value: '1', label: 'Quản lý' },
  { value: '2', label: 'Nhân công' },
]

export function UserFilter() {
  const [loading, setLoading] = useState(false)

  const handleExportCSV = async () => {
    console.log('export csv')
    setLoading(true)

    const formatDate = format(new Date(), 'yyyy_MM_dd')
    const csvConfig = mkConfig({
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: `${formatDate}_[Nhân_công]`,
    })

    const data: UserCsvType[] = []
    const dataExportCsv = await getAllLabor()

    dataExportCsv.map((item) => {
      data.push({
        Mã: item._id || '',
        Email: item?.email || '',
        Quyền: item?.role || 0,
        'Mã nhân công': item.labor_id?._id || '',
        position: item.labor_id?.position || '',
        rate_per_hour: item.labor_id?.rate_per_hour || 0,
        firstName: item.labor_id?.information_id?.firstName || '',
        lastName: item.labor_id?.information_id?.lastName || '',
      })
    })

    const csv = generateCsv(csvConfig)(data)
    download(csvConfig)(csv)
    setLoading(false)
  }

  const filterColumn: FilterColumn<ExVoid<UserParamsType>>[] = [
    {
      field: 'username',
      type: 'text',
      placeholder: 'Tên người dùng',
      defaultValue: '',
      sx: {
        width: 320,
      },
      fieldOptions: {
        searchIcon: true,
      },
    },
    {
      field: 'role',
      type: 'select',
      placeholder: 'Vai trò',
      defaultValue: '',
      sx: {
        width: 320,
      },
      options: POSITION_OPTIONS,
    },
  ]

  return (
    <FilterBar
      columns={filterColumn}
      createPath="/user/create"
      exportCsv={{
        onExportCsv: handleExportCSV,
        isLoading: loading,
      }}
    />
  )
}
