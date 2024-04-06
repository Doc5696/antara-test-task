import { useCallback, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { io } from 'socket.io-client'

import apiConfig from 'src/config/api'
import { TODOS_KEY } from 'src/api/Todo/getTodos'
import { TodoSchema, TodoProgressIoUpdateSchema } from 'src/api/Todo/schemas'
import { SocketEvents } from 'src/api/types'

const useTodoSocketSubscription = () => {
  const queryClient = useQueryClient()

  const updateTodosQueryData = useCallback(
    (data: TodoProgressIoUpdateSchema) => {
      queryClient.setQueryData(TODOS_KEY, (oldData: TodoSchema[]) => {
        if (!data || !data._id) return
        const newData = [...oldData]
        const { _id, progress } = data
        const updateProgress = (todo: TodoSchema) => ({
          ...todo,
          progress,
        })
        const indexOfOutdatedItem = oldData.findIndex(todo => todo._id === _id)
        newData[indexOfOutdatedItem] = updateProgress(
          oldData[indexOfOutdatedItem],
        )

        return newData
      })
    },
    [queryClient],
  )

  useEffect(() => {
    const socket = io(apiConfig.webSocketBase as string, {
      autoConnect: false,
    })

    if (!socket.connected) {
      socket.connect()
    }
    socket.on('connect', () => {
      // eslint-disable-next-line no-console
      console.info('Socket.io connection established successfully')
    })

    socket.on(SocketEvents.UPDATE_TODO_PROGRESS, updateTodosQueryData)

    return () => {
      socket.off(SocketEvents.UPDATE_TODO_PROGRESS, updateTodosQueryData)
      if (socket.connected) {
        socket.disconnect()
      }
    }
  }, [queryClient, updateTodosQueryData])
}

export default useTodoSocketSubscription
