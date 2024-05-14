import { format } from 'date-fns'

export const formatDateTime = (date: string | null | undefined) => {
  return date ? format(new Date(date), 'yyyy/MM/dd/ HH:mm') : '-'
}

export const formatDate = (date: string | null | undefined | Date) => {
  return date ? format(new Date(date), 'yyyy/MM/dd') : '-'
}

export const formatNumber = (value: number | string) => {
  if (isNaN(Number(value))) return value
  if (typeof value === 'string') {
    value = Number(value)
  }

  return value.toLocaleString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
