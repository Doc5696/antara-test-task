import { httpClient } from 'src/api/HttpClient'
import TodoUrls from 'src/api/Todo/urls'

const deleteTodo = (todoId: string) =>
  httpClient.delete({
    url: `${TodoUrls.TODOS}/${todoId}`,
  })

export default deleteTodo
