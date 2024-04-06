import { TodoSchema } from './schemas'
import TodoUrls from './urls'
import { httpClient } from 'src/api/HttpClient'

export const TODOS_KEY = [TodoUrls.TODOS]

const getTodos = () =>
  httpClient.get<TodoSchema[]>({
    url: TodoUrls.TODOS,
  })

export default getTodos
