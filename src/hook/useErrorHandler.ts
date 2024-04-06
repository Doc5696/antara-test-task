import { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'
import { useCallback } from 'react'

import { GENERIC_ERROR_MESSAGE } from 'src/constants'

const useErrorHandler = () => {
  const { enqueueSnackbar } = useSnackbar()

  return useCallback(
    (err: AxiosError) => {
      const { message, response } = err
      // just a quick solution for specific API
      const responseMessage = (response?.data as { error: string })?.error

      const messageToDisplay =
        responseMessage || message || GENERIC_ERROR_MESSAGE

      enqueueSnackbar(messageToDisplay, {
        variant: 'error',
      })
    },
    [enqueueSnackbar],
  )
}

export default useErrorHandler
