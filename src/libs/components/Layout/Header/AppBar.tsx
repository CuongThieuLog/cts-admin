import { AppBar as MuiAppBar, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const HEADER_HEIGHT = 60

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  height: HEADER_HEIGHT,
  backgroundColor: 'white',
  borderBottom: `1px solid ${grey[200]}`,
  left: 0,
  right: 0,
  width: '100%',
}))

export { AppBar }
