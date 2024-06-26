import { Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import Routes from 'src/routing/routes'
import FallbackPageContainer from 'src/components/FallbackPageContainer'

const NotFound = () => {
  return (
    <FallbackPageContainer>
      <Typography variant="h1" align="center">
        404
      </Typography>
      <Typography variant="h3" align="center">
        Seems like this page does not exist
      </Typography>
      <Typography variant="h5">Just return to home page</Typography>
      <NavLink to={Routes.HOME}>
        <Button variant="contained" startIcon={<ChevronLeftIcon />}>
          Back to home page
        </Button>
      </NavLink>
    </FallbackPageContainer>
  )
}

export default NotFound
