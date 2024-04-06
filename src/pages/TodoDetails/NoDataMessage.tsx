import { Button, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { NavLink } from 'react-router-dom'

import Routes from 'src/routing/routes'
import FallbackPageContainer from 'src/components/FallbackPageContainer'

const NoDataMessage = () => {
  return (
    <FallbackPageContainer>
      <Typography align="center" variant="h4">
        Ooops, There is no such TODO
      </Typography>
      <NavLink to={Routes.HOME}>
        <Button variant="contained" startIcon={<ChevronLeftIcon />}>
          Go to TODO list page
        </Button>
      </NavLink>
    </FallbackPageContainer>
  )
}

export default NoDataMessage
