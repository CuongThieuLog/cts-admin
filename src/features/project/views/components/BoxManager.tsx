import { primary } from '@/libs/config/theme'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface BoxManagerProps {
  title: string
  bgColor?: string
  icon: string
  pathName: string
}

const BoxManager: React.FC<BoxManagerProps> = ({ bgColor, icon, title, pathName }) => {
  const router = useRouter()

  return (
    <Stack
      width={200}
      height={150}
      borderRadius={2}
      bgcolor={bgColor || primary[200]}
      p={2}
      onClick={() => router.push(pathName)}
      spacing={2}
    >
      <Image src={icon} alt={title} width={50} height={50} />

      <Typography variant="h3" lineHeight="20px">
        {title}
      </Typography>
    </Stack>
  )
}

export { BoxManager }
