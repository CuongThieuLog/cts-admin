import { Skeleton, Stack } from '@mui/material'

const Loading = () => {
  return (
    <Stack width="100%" height="100vh" justifyContent="center" alignItems="center">
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" width={20} height={40} />
        <Skeleton variant="rectangular" width={20} height={40} />
        <Skeleton variant="rectangular" width={20} height={40} />
      </Stack>
    </Stack>
  )
}

export { Loading }
