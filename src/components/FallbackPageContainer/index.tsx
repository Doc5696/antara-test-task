import { Stack, Box } from '@mui/material'

import { FallbackPageContainerProps } from './types'

const FallbackPageContainer = ({ children }: FallbackPageContainerProps) => {
  return (
    <Stack
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgcolor="#eee"
    >
      <Stack
        width={500}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        p={4}
        pb={6}
        bgcolor="#fff"
      >
        {children}
      </Stack>
    </Stack>
  )
}

export default FallbackPageContainer
