import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import getTodos, { TODOS_KEY } from 'src/api/Todo/getTodos'
import useTodoItem from 'src/features/TodoItem/hook'
import useTodoSocketSubscription from 'src/hook/useTodoSocketSubscription'

const useTodoDetails = () => {
  useTodoSocketSubscription()

  const { id } = useParams()
  const { removeTodo } = useTodoItem()
  const navigate = useNavigate()

  const { data: todos } = useQuery({
    queryKey: TODOS_KEY,
    queryFn: getTodos,
  })

  const data = todos?.find(item => item._id === id)
  return { data, removeTodo, navigate }
}

export default useTodoDetails
