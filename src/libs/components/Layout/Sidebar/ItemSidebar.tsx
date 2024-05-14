'use client'

import {
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  styled,
} from '@mui/material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { MenuType } from './menu'

type StyleListItemButtonType = {
  active?: boolean
}

type ListItemButtonType = {
  menu: MenuType
}

const ListItemButton: React.FC<ListItemButtonType> = ({ menu }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleDirection = () => {
    router.push(menu.href)
  }

  const isActive = menu.subHref
    ? pathname === menu.href || menu.subHref.split('/')[1] === pathname.split('/')[1]
    : pathname.split('/')[1] === menu.href.split('/')[1]

  return (
    <StyleListItemButton active={isActive} onClick={handleDirection} disabled={menu.disabled}>
      <ListItemIcon>
        <Image
          width={24}
          height={24}
          alt={menu.title}
          src={isActive ? menu.active_icon : menu.icon}
        />
      </ListItemIcon>
      <ListItemText primary={menu.title} />

      {isActive && (
        <ListItemIcon>
          <Image
            width={24}
            height={24}
            alt={menu.title}
            src="/assets/svgs/arrow_right.svg"
            style={{
              color: 'red',
            }}
          />
        </ListItemIcon>
      )}
    </StyleListItemButton>
  )
}

const StyleListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyleListItemButtonType>(({ theme, active }) => ({
  gap: 12,
  height: 60,
  width: 224,
  margin: '2px 0',
  borderRadius: '12px',
  padding: '18px 16px 18px 20px',
  boxShadow: active ? '4px 4px 16px 0px #0000000D' : 'none',
}))

const ListItemIcon = styled(MuiListItemIcon)({
  minWidth: 20,
})

const ListItemText = styled(MuiListItemText)({
  '.MuiListItemText-primary': {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '16px',
  },
  margin: 0,
})

export { ListItemButton, ListItemIcon, ListItemText }
