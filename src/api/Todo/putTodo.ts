import { httpClient } from 'src/api/HttpClient'
import { TodoSchema } from './schemas'
import TodoUrls from './urls'

const putTodo = (data: TodoSchema) =>
  httpClient.put<TodoSchema>({
    url: TodoUrls.TODOS,
    data,
  })

export default putTodo
