import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { AxiosError } from 'axios'

import deleteTodo from 'src/api/Todo/deleteTodo'
import useInvalidateTodos from 'src/hook/useInvalidateTodos'
import { REMOVED_SUCCESS_MESSAGE } from 'src/constants'
import useErrorHandler from 'src/hook/useErrorHandler'

const useTodoItem = () => {
  const invalidateTodos = useInvalidateTodos()
  const { enqueueSnackbar } = useSnackbar()
  const onError = useErrorHandler()

  const { mutate: removeTodo } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      invalidateTodos()
      enqueueSnackbar(REMOVED_SUCCESS_MESSAGE, {
        variant: 'success',
      })
    },
    onError: (err: AxiosError) => onError(err),
  })

  return {
    removeTodo,
  }
}

export default useTodoItem
