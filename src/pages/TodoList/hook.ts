import { useQuery } from '@tanstack/react-query'

import getTodos, { TODOS_KEY } from 'src/api/Todo/getTodos'
import useTodoSocketSubscription from 'src/hook/useTodoSocketSubscription'

const useTodoList = () => {
  useTodoSocketSubscription()
  const {
    data: todos,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: TODOS_KEY,
    queryFn: getTodos,
  })
  return { todos, isLoading, isRefetching }
}

export default useTodoList
