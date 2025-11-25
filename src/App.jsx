import { QueryClient, QueryClientProvider, useQuery,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MyRouters } from './routes/Router'
import {GlobalStyles} from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import { useThemeStore } from './store/ThemeStore'

const queryclient = new QueryClient();


// const queryclient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       staleTime: Infinity,
//     }
//   }
// });

function App() {
  const {themeStyle} = useThemeStore()

  return (
    <ThemeProvider theme={themeStyle}>
      <QueryClientProvider client={queryclient}>
        <GlobalStyles />
        <MyRouters/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
