import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import NiceModal from '@ebay/nice-modal-react'

import apiConfig from './config/api'
import { NOTIFICATIONS_AUTO_HIDE_DURATION } from './config'
import TodoList from './pages/TodoList'
import CloseSnackbarBtn from 'src/components/CloseSnackbarBtn'

const queryClient = new QueryClient({
  defaultOptions: { queries: apiConfig.queryConfig },
})

function App() {
  return (
    <SnackbarProvider
      action={CloseSnackbarBtn}
      autoHideDuration={NOTIFICATIONS_AUTO_HIDE_DURATION}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>
            <TodoList />
          </NiceModal.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App
