import { BaseSyntheticEvent, memo } from 'react'
import { Stack, Card, Typography, Button } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { NavLink } from 'react-router-dom'

import EditBtn from 'src/components/EditBtn'
import DeleteBtn from 'src/components/DeleteBtn'
import { showConfirmDelete } from 'src/modals/ConfirmDelete'
import { showUpdateTodo } from 'src/modals/Todo'
import Routes from 'src/routing/routes'
import { TodoItemProps } from './types'
import useTodoItem from './hook'

const TodoItem = memo(({ data }: TodoItemProps) => {
  const { _id, name, description, progress } = data
  const { removeTodo } = useTodoItem()
  return (
    <Card
      sx={{
        p: 1.5,
        '&:hover': {
          boxShadow:
            ' 0px 2px 2px -1px rgba(0,0,0,0.4), 0px 1px 5px 0px rgba(0,0,0,0.24), 0px 1px 7px 0px rgba(0,0,0,0.22)',
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Stack direction="column" maxWidth="80%">
          <Typography
            variant="h5"
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {name}&nbsp;
            <span className="text-id-grey">#{_id}</span>
          </Typography>
          <Typography mt={2} variant="body2">
            Description:
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
          <Typography mt={2} variant="body2">
            Progress:&nbsp;
            <span className="text-bold">{progress}</span>
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2} justifyContent="space-around">
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <EditBtn
              onClick={(e: BaseSyntheticEvent) => {
                showUpdateTodo(e, data)
              }}
            />
            <DeleteBtn
              onClick={(e: BaseSyntheticEvent) => {
                showConfirmDelete(e, () => {
                  removeTodo(_id)
                })
              }}
            />
          </Stack>
          <Stack>
            <NavLink to={`${Routes.TODOS}/${_id}`}>
              <Button variant="contained" endIcon={<ChevronRightIcon />}>
                See more
              </Button>
            </NavLink>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
})

export default TodoItem
