import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateContextProvider } from './auth/context/index'
import { CookiesProvider } from 'react-cookie'
import AuthMiddleware from './auth/middleware/AuthMiddleware'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <CookiesProvider>
          <StateContextProvider>
            <AuthMiddleware>
              <App />
            </AuthMiddleware>
          </StateContextProvider>
        </CookiesProvider>
      </Router>
    </QueryClientProvider>
  </StrictMode>,
)
