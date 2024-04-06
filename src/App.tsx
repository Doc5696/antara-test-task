import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import NiceModal from '@ebay/nice-modal-react'

import CloseSnackbarBtn from 'src/components/CloseSnackbarBtn'
import ErrorBoundary from 'src/features/ErrorBoundary'
import apiConfig from './config/api'
import { NOTIFICATIONS_AUTO_HIDE_DURATION } from './config'
import Routing from './routing'

const queryClient = new QueryClient({
  defaultOptions: { queries: apiConfig.queryConfig },
})

const App = () => {
  return (
    <ErrorBoundary>
      <SnackbarProvider
        action={CloseSnackbarBtn}
        autoHideDuration={NOTIFICATIONS_AUTO_HIDE_DURATION}
      >
        <QueryClientProvider client={queryClient}>
          <NiceModal.Provider>
            <Routing />
          </NiceModal.Provider>
        </QueryClientProvider>
      </SnackbarProvider>
    </ErrorBoundary>
  )
}

export default App
