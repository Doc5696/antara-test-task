import { useModal } from '@ebay/nice-modal-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'

import postTodo from 'src/api/Todo/postTodo'
import putTodo from 'src/api/Todo/putTodo'
import { SAVED_SUCCESS_MESSAGE } from 'src/constants'
import useErrorHandler from 'src/hook/useErrorHandler'
import useInvalidateTodos from 'src/hook/useInvalidateTodos'
import getTimeStamp from 'src/utils/getTimeStamp'
import { TodoSchema } from 'src/api/Todo/schemas'
import { FORM_FIELDS, FormData } from './types'
import { getDefaultValues } from './constants'
import validationSchema from './validationSchema'

const useCreateTodoForm = (data?: TodoSchema) => {
  const modal = useModal()
  const { enqueueSnackbar } = useSnackbar()

  const onError = useErrorHandler()
  const invalidateTodos = useInvalidateTodos()

  const isInEditMode = Boolean(data && data._id)

  const {
    handleSubmit,
    formState: { isDirty, isValid },
    control,
  } = useForm<FormData>({
    defaultValues: getDefaultValues(data),
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSuccessCallback = () => {
    invalidateTodos()
    enqueueSnackbar(SAVED_SUCCESS_MESSAGE, {
      variant: 'success',
    })
    modal.hide()
  }

  const { mutate: createTodo, isPending: isCreationPending } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      onSuccessCallback()
    },
    onError: (err: AxiosError) => onError(err),
  })

  const { mutate: updateTodo, isPending: isUpdatePending } = useMutation({
    mutationFn: putTodo,
    onSuccess: () => {
      onSuccessCallback()
    },
    onError: (err: AxiosError) => onError(err),
  })

  const isPending = isCreationPending || isUpdatePending

  const mutate = isInEditMode ? updateTodo : createTodo

  const onSave = handleSubmit(
    isPending
      ? () => {}
      : data => {
          const todoId = isInEditMode ? data._id : getTimeStamp().toString()
          return mutate({
            ...data,
            [FORM_FIELDS.ID]: todoId,
          })
        },
  )

  const isSubmitBtnDisabled = !isValid || isPending || !isDirty

  return { modal, control, onSave, isSubmitBtnDisabled, isInEditMode }
}

export default useCreateTodoForm
