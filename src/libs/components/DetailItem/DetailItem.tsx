import { StatusColorType, StatusTag } from '@/libs/components/StatusTag'
import { primary, statusColors } from '@/libs/config/theme'
import { Skeleton, Stack, SxProps, Typography } from '@mui/material'

type DetailItemProps = {
  label: string
  value?: string | number | []
  isPending?: boolean
  labelSx?: SxProps
  textUnderLine?: boolean
  valueSx?: SxProps
  status?: {
    text: string
    color: StatusColorType
    width?: string
  }
}

const DefaultContent = ({ value, sx }: { value: string | number | []; sx?: SxProps }) => {
  if (Array.isArray(value)) {
    return (
      <Stack direction="row" width="100%" flexWrap="wrap" gap={1} fontWeight={400}>
        {value.map((item, index) => (
          <Typography
            variant="body2"
            whiteSpace="pre-wrap"
            fontWeight={400}
            sx={{ wordBreak: 'break-word', ...sx }}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    )
  }

  return (
    <Typography
      sx={{ wordBreak: 'break-word', ...sx }}
      variant="body2"
      width="100%"
      overflow="hidden"
      textOverflow="ellipsis"
      fontWeight={400}
      whiteSpace="pre-wrap"
    >
      {value}
    </Typography>
  )
}

const DetailItem = (props: DetailItemProps) => {
  const { label, value, status, isPending, valueSx, labelSx, textUnderLine } = props
  const valueSxTextUnderLine = textUnderLine
    ? { color: statusColors.assistant, textDecoration: 'underline', textUnderlineOffset: '2px' }
    : {}

  return (
    <Stack spacing={1} direction="row" alignItems="stretch" height="fit-content">
      <Stack
        minWidth={120}
        padding="4px 8px"
        bgcolor={primary[100]}
        justifyContent="center"
        sx={{ height: 44, ...labelSx }}
      >
        <Typography variant="body2" color={primary[500]}>
          {label}
        </Typography>
      </Stack>

      {isPending ? (
        <Skeleton variant="text" width={336} height={44} />
      ) : (
        <Stack width={320} height="auto" justifyContent="center">
          {status && <StatusTag color={status.color} text={status.text} width={status.width} />}

          {value && <DefaultContent value={value} sx={{ ...valueSxTextUnderLine, ...valueSx }} />}
        </Stack>
      )}
    </Stack>
  )
}

export { DetailItem }
