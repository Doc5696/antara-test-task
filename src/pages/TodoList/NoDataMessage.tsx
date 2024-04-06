import { Stack, Typography } from '@mui/material'

const NoDataMessage = () => {
  return (
    <Stack spacing={3} pt={7} pb={4}>
      <Typography align="center" variant="h4">
        There is no any TODOs yet
      </Typography>
      <Typography align="center" variant="h6">
        Let&apos;s create some!
      </Typography>
    </Stack>
  )
}

export default NoDataMessage
