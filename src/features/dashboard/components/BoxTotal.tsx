import { primary } from '@/libs/config/theme'
import { formatNumber } from '@/utils/format'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface BoxTotalProps {
  pathImage: string
  total: number | string
  title: string
  bgColor?: string
}

const BoxTotal: React.FC<BoxTotalProps> = ({ pathImage, title, total, bgColor }) => {
  return (
    <Box width={250} height={150} borderRadius={2} bgcolor={bgColor || primary[200]} p={2}>
      <Image src={pathImage} alt={title} width={50} height={50} />

      <Typography variant="h6" fontWeight={700}>
        {formatNumber(total)}
      </Typography>

      <Typography variant="body2">{title}</Typography>
    </Box>
  )
}

export { BoxTotal }
