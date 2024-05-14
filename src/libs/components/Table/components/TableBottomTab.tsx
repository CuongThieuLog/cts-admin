import { SIDE_BAR_WIDTH } from '@/libs/components/Layout/Sidebar'
import request from '@/libs/config/axios'
import { Paper, Stack } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useReactTableContext } from '../ReactTable/context'
import { ButtonRed as ButtonConfirm } from '../styled'

type SelectionStateType = {
  id: string
  name: string
}

export const defaultActionApi = {
  '/': {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
  project: {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
  user: {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
  material: {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
  report: {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
  cost: {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
  equipment: {
    delete: async (ids: string[]) => {},
    title: 'Xoá',
  },
}

export type ActionPath = keyof typeof defaultActionApi
export const TABLE_BOTTOM_TAB_HEIGHT = 120

function TableBottomTab() {
  const pathname = usePathname()
  const { instance } = useReactTableContext()
  const rowSelection = instance.getSelectedRowModel().flatRows
  const [selectedIds, setSelectedIds] = useState<SelectionStateType[]>([])
  const path = (pathname.split('/')[1] ? pathname.split('/')[1] : '/') as ActionPath
  const { projectId } = useParams()
  const laborIds = selectedIds.map((item) => item.id)
  const { mutate } = useMutation({
    mutationFn: async () =>
      await request.put(`/project/add-labors/${projectId}`, {
        laborIds,
      }),
  })

  useEffect(() => {
    setSelectedIds(
      rowSelection.map((row) => {
        const original = (row.original as { name: string }).name

        return {
          id: row.id,
          name: original,
        }
      }),
    )
  }, [rowSelection])

  const isShowBottomTab = selectedIds.length > 0

  const handleSubmit = () => {
    mutate()
  }

  const isChooseLabor = selectedIds.length > 0 && path === 'project'

  return (
    <>
      {isShowBottomTab && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: isChooseLabor ? 0 : SIDE_BAR_WIDTH,
            right: 0,
            borderRadius: 0,
            height: TABLE_BOTTOM_TAB_HEIGHT,
          }}
          elevation={3}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            height="100%"
            gap={2}
          >
            <ButtonConfirm
              variant="outlined"
              onClick={handleSubmit}
              sx={{ height: 48, width: 180, fontSize: '16px' }}
            >
              Thêm nhân công
            </ButtonConfirm>
          </Stack>
        </Paper>
      )}
    </>
  )
}

export { TableBottomTab }
