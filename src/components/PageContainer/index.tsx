import { Stack, Box } from '@mui/material'

import { PageContainerProps } from './types'

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Stack
      alignItems="center"
      sx={{
        minHeight: '100vh',
        bgcolor: '#eee',
      }}
    >
      <Stack direction="column" bgcolor="#fff" width="80%" p={2}>
        {children}
      </Stack>
    </Stack>
  )
}

export default PageContainer
