import { Stack, Typography, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import PageContainer from 'src/components/PageContainer'
import TodoItem from 'src/features/TodoItem'
import { showCreateTodo } from 'src/modals/Todo'
import NoDataMessage from './NoDataMessage'
import useTodoList from './hook'

const TodoList = () => {
  const { todos, isLoading, isRefetching } = useTodoList()

  // TODO: could be replaced with some preloader
  if (isLoading && !isRefetching) return null
  return (
    <PageContainer>
      <Stack spacing={2} pb={3}>
        <Typography variant="h2" align="center">
          Your TODO list:
        </Typography>
        <Stack spacing={1.5}>
          {todos && todos?.length ? (
            todos.map(todo => <TodoItem key={todo._id} data={todo} />)
          ) : (
            <NoDataMessage />
          )}
        </Stack>
        <Fab
          color="primary"
          onClick={showCreateTodo}
          sx={theme => ({
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          })}
        >
          <AddIcon />
        </Fab>
      </Stack>
    </PageContainer>
  )
}

export default TodoList
