import { base, black } from '@/libs/config/theme'
import { List, Stack } from '@mui/material'
import { ListItemButton } from './ItemSidebar'
import { menus } from './menu'

export const SIDE_BAR_WIDTH = 240

const Sidebar = () => {
  return (
    <Stack
      sx={{
        position: 'fixed',
        width: SIDE_BAR_WIDTH,
        height: '100%',
        background: base.white,
        alignItems: 'center',
        borderRight: `1px solid ${black[200]}`,
        top: 59,
        pt: 2,
      }}
    >
      <List
        sx={{
          px: 1,
          py: '2px',
          width: '100%',
          bgcolor: 'background.white',
        }}
        component="nav"
      >
        {menus.map((menu) => (
          <ListItemButton key={menu.title} menu={menu} />
        ))}
      </List>
    </Stack>
  )
}

export { Sidebar }
