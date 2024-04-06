import { useQuery } from '@tanstack/react-query'

import getTodos, { TODOS_KEY } from 'src/api/Todo/getTodos'

const useTodoList = () => {
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
