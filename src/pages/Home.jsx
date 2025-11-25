import { usePokemonStore } from '../store/PokemonStore'
import { useQuery } from '@tanstack/react-query'
import { HomeTemplate } from '../components/templates/HomeTemplate';

export const Home = () => {
    const { fethPokemons, buscarPokemon} = usePokemonStore()

      const {isLoading, isError, error, isFetching, refetch, isPending, data} = useQuery({
        queryKey:["mostrar pokemon"],
        queryFn: fethPokemons,
      })

      const {} = useQuery({
        queryKey: ["buscar pokemon"],
        queryFn: () => buscarPokemon(),
      })

  return (
    <HomeTemplate />
  )
}
