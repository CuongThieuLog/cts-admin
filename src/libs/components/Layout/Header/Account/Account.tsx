import { black, primary } from '@/libs/config/theme'
import { useAuth } from '@/libs/context'
import {
  Box,
  IconButton,
  ListItemIcon,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  Stack,
  Typography,
  styled,
} from '@mui/material'
import Image from 'next/image'
import LogOutIcon from 'public/assets/svgs/log_out.svg'
import { useState } from 'react'
import { StackName } from './Menu'

const Account = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { admin, handleLogout } = useAuth()

  const menu = [
    {
      title: 'Đăng xuất',
      icon: LogOutIcon,
      onClick: handleLogout,
    },
  ]

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      <StackName direction="row" spacing={1} onClick={handleClick} ml={2}>
        <Stack direction="row" spacing={3}>
          <Image src="/assets/svgs/ring.svg" width={30} height={30} alt="avatar" />

          <Image src="/assets/imgs/avatar.png" width={30} height={30} alt="avatar" />
        </Stack>

        <IconButton
          size="small"
          sx={{ ml: 2, p: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Image
            src={open ? '/assets/svgs/arrow_left_account.svg' : '/assets/svgs/arrow_down.svg'}
            width={20}
            height={20}
            alt="down"
          />
        </IconButton>
      </StackName>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        elevation={1}
      >
        {menu.map((item) => (
          <MenuItem key={item.title} onClick={item.onClick}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <Typography variant="body2">{item.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export { Account }

const TextUserName = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  maxWidth: 90,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}))

const Menu = styled(MuiMenu)({
  '.MuiMenu-paper': {
    overflow: 'hidden',
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
  '.MuiList-root': {
    paddingBottom: 0,
    paddingTop: 0,
  },
})

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  height: theme.spacing(6.75),
  borderBottom: `1px solid ${black[200]}`,
  fontSize: 15,
  lineHeight: '22px',
  color: primary[700],
  backgroundColor: primary[100],
  fontWeight: 700,
  ':hover': {
    backgroundColor: primary[100],
  },
  ':focus': {
    backgroundColor: primary[100],
  },
}))
