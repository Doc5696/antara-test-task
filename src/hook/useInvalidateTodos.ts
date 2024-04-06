import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

import { TODOS_KEY } from 'src/api/Todo/getTodos'

const useInvalidateTodos = () => {
  const queryClient = useQueryClient()

  return useCallback(() => {
    queryClient.invalidateQueries({ queryKey: TODOS_KEY })
  }, [queryClient])
}

export default useInvalidateTodos
