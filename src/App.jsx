import './App.css'
import { QueryClient, QueryClientProvider, useQuery,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MyRouters } from './routes/Router'

const queryclient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <MyRouters/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
