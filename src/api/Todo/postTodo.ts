import { httpClient } from 'src/api/HttpClient'
import { TodoSchema } from './schemas'
import TodoUrls from './urls'

const postTodo = (data: TodoSchema) =>
  httpClient.post<TodoSchema>({
    url: TodoUrls.TODOS,
    data,
  })

export default postTodo
