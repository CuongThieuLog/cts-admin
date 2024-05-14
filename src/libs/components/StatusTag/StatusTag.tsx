import { Stack } from '@mui/material'
import { green, grey, red, yellow } from '@mui/material/colors'
import { TextOverflow } from '../TextOverflow'

export type StatusColorType = 'red' | 'grey' | 'yellow' | 'green'
type StatusTagProps = { color: StatusColorType; text: string; width?: string }

const colorStatusMap = {
  red: {
    bgColor: red[100],
    color: red[700],
  },
  grey: {
    bgColor: grey[100],
    color: grey[800],
  },
  yellow: {
    bgColor: yellow[100],
    color: yellow[800],
  },
  green: {
    bgColor: green[100],
    color: green[800],
  },
}

const StatusTag = ({ color, text, width = '80px' }: StatusTagProps) => {
  const bgColor = colorStatusMap[color].bgColor

  return (
    <Stack
      color={colorStatusMap[color].color}
      bgcolor={bgColor}
      borderRadius="4px"
      width={width}
      height={24}
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <TextOverflow
        fontSize="14px"
        fontWeight={700}
        lineHeight="16px"
        width={width === '100%' ? '100%' : `calc(${width} - 16px)`}
      >
        {text}
      </TextOverflow>
    </Stack>
  )
}

export { StatusTag }
