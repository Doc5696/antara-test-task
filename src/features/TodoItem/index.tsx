import { Stack, Card, Typography } from '@mui/material'
import { BaseSyntheticEvent } from 'react'

import EditBtn from 'src/components/EditBtn'
import DeleteBtn from 'src/components/DeleteBtn'
import { showConfirmDelete } from 'src/modals/ConfirmDelete'
import { showUpdateTodo } from 'src/modals/Todo'
import { TodoItemProps } from './types'
import useTodoItem from './hook'

const TodoItem = ({ data }: TodoItemProps) => {
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
        <Stack direction="column">
          <Typography variant="h5">
            {name}&nbsp;
            <span style={{ color: 'grey', fontSize: 18 }}>#{_id}</span>
          </Typography>
          <Typography mt={2} variant="body2">
            Description:
          </Typography>
          <Typography>{description}</Typography>
          <Typography mt={2} variant="body2">
            Progress:&nbsp;
            <span style={{ fontWeight: 'bold' }}>{progress}</span>
          </Typography>
        </Stack>
        <Stack direction="column">
          <Stack direction="row" spacing={1}>
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
        </Stack>
      </Stack>
    </Card>
  )
}

export default TodoItem
