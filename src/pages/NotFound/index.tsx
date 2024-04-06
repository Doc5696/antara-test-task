import { Button, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import Routes from 'src/routing/routes'

const NotFound = () => {
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
        <Typography variant="h1" align="center">
          404
        </Typography>
        <Typography variant="h3" align="center">
          Seems like this page does not exists
        </Typography>
        <Typography variant="h5">Just return to home page</Typography>
        <NavLink to={Routes.HOME}>
          <Button variant="contained">Back to home page</Button>
        </NavLink>
      </Stack>
    </Stack>
  )
}

export default NotFound
