import './App.css'
import { useContadorstore } from './store/ContadorStore'
import { QueryClient, QueryClientProvider, useQuery,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { usePokemonStore } from './store/PokemonStore'

const queryclient = new QueryClient()

function App() {

  const {pokemons, fethPokemons} = usePokemonStore()
  const {isLoading, isError, data , error} = useQuery({
    queryKey:["mostrar pokemons"],
    queryFn: fethPokemons
  })

  if(isLoading) {
    return <span>Loading...</span>
  }

  return (
    <QueryClientProvider client={queryclient}>
      <div>
        Hola Pokedex
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
