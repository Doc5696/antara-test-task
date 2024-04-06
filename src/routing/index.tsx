import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TodoList from 'src/pages/TodoList'
import TodoDetails from 'src/pages/TodoDetails'
import NotFound from 'src/pages/NotFound'
import Routes from './routes'

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <TodoList />,
  },
  { path: `/${Routes.TODOS}/:id`, element: <TodoDetails /> },
  {
    path: '*',
    element: <NotFound />,
  },
])

const Routing = () => {
  return <RouterProvider router={router} />
}

export default Routing
