import { usePokemonStore } from '../store/PokemonStore'
import { useQuery } from '@tanstack/react-query'
import { HomeTemplate } from '../components/templates/HomeTemplate';

export const Home = () => {
    const { fethPokemons} = usePokemonStore()

      const {isLoading, isError, error, isFetching, refetch, isPending, data} = useQuery({
        queryKey:["mostrar pokemon"],
        queryFn: fethPokemons,
      })

  return (
    <div>
    <div>
      <span>Hola world</span>
    </div>
      <HomeTemplate />

    </div>
  )
}
