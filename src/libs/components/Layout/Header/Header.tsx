import { Stack, styled } from '@mui/material'
import LogoHeader from 'public/assets/svgs/logo.svg'
import { CustomLink } from '../../CustomLink'
import { Account } from './Account'
import { AppBar, HEADER_HEIGHT } from './AppBar'

const Header = () => {
  return (
    <AppBar elevation={0}>
      <StackContainer>
        <Stack direction="row" spacing={18.75} alignItems="center">
          <CustomLink href={'/'}>
            <LogoHeader />
          </CustomLink>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Account />
        </Stack>
      </StackContainer>
    </AppBar>
  )
}

export { HEADER_HEIGHT, Header }

const StackContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 5),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}))
