import { Stack, Typography, Button } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { NavLink } from 'react-router-dom'
import { BaseSyntheticEvent } from 'react'

import { showConfirmDelete } from 'src/modals/ConfirmDelete'
import { showUpdateTodo } from 'src/modals/Todo'
import PageContainer from 'src/components/PageContainer'
import Routes from 'src/routing/routes'
import useTodoDetails from './hook'
import NoDataMessage from './NoDataMessage'

const TodoDetails = () => {
  const { data, removeTodo, navigate } = useTodoDetails()

  if (!data) return <NoDataMessage />
  const { _id, name, description, progress } = data

  return (
    <PageContainer>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavLink to={Routes.HOME}>
            <Button startIcon={<ChevronLeftIcon />}>Go back</Button>
          </NavLink>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={(e: BaseSyntheticEvent) => showUpdateTodo(e, data)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={(e: BaseSyntheticEvent) => {
                showConfirmDelete(e, () => {
                  navigate(Routes.HOME)
                  removeTodo(_id)
                })
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack p={2}>
            <Typography variant="h3">
              {name}&nbsp;<span className="text-id-grey">#{_id}</span>
            </Typography>
          </Stack>
          <Stack p={1}>
            <Typography variant="h5">Description:</Typography>
            <Typography>{description}</Typography>
          </Stack>
          <Stack p={1} pb={3}>
            <Typography variant="h5">Progress:</Typography>
            <Typography>{progress}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </PageContainer>
  )
}

export default TodoDetails
