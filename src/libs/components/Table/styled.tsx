import {
  Button,
  IconButton,
  PaginationItem as MuiPaginationItem,
  TableCell as MuiTableCell,
  styled,
} from '@mui/material'
import { red } from '@mui/material/colors'

const ButtonPagination = styled(Button)(({ theme }) => ({
  background: theme.palette.base.white + '!important',
  '&.MuiPaginationItem-root': {
    padding: 8,
    borderRadius: 6,
    border: `1px solid ${theme.palette.mono[200]}`,
    backgroundColor: theme.palette.base.white,
  },
}))

const ButtonAction = styled(IconButton)({
  padding: 0,
  '&:hover': {
    background: 'transparent',
  },
})

const PaginationItem = styled(MuiPaginationItem)(({ theme }) => ({
  border: 'none',
  width: 24,
  height: 32,
  padding: '6px 8px',
  minWidth: 24,
  margin: '0 2px',
  borderRadius: '6px',
  '&.Mui-selected': {
    border: 'none',
    backgroundColor: theme.palette.base.primary_pale,
    color: theme.palette.base.primary,
  },
  '&.MuiPaginationItem-previousNext': {
    minWidth: 32,
    border: `1px solid ${theme.palette.mono[200]}`,
    padding: '8px',
    margin: '0 6px',
  },
}))

const ButtonRed = styled(Button)(({ theme }) => ({
  borderColor: red[700],
  color: red[700],
  height: 40,
  fontSize: '14px',
  width: 80,
  '&:hover': {
    borderColor: red[700],
  },
  '&:focus': {
    borderColor: red[700],
  },
}))

const ButtonCreate = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.dark,
  borderColor: theme.palette.primary.dark,
  color: theme.palette.base.white,
  height: 40,
  fontSize: '14px',
  '&:hover': {
    background: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
  '&:focus': {
    background: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
}))

const ButtonExportCsv = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.success.main,
  color: theme.palette.success.main,
  width: 150,
  height: 40,
  padding: 0,
  fontSize: '14px',
  '&:hover': {
    borderColor: theme.palette.success.main,
  },
  '&:focus': {
    borderColor: theme.palette.success.main,
  },
}))

const TableCell = styled(MuiTableCell)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
  textAlign: 'center',
}))

const ButtonSearch = styled(ButtonRed)({
  marginLeft: 16,
  padding: '0',
})

const ButtonActionTable = styled(Button)({
  width: 120,
  height: 48,
  padding: 0,
})

export {
  ButtonAction,
  ButtonActionTable,
  ButtonCreate,
  ButtonExportCsv,
  ButtonPagination,
  ButtonRed,
  ButtonSearch,
  PaginationItem,
  TableCell,
}
