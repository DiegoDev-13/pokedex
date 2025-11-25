import { usePokemonStore } from '../store/PokemonStore'
import { useQuery } from '@tanstack/react-query'
import { HomeTemplate } from '../components/templates/HomeTemplate';

export const Home = () => {
    const { fethPokemons, buscarPokemon, buscador} = usePokemonStore()

      const {isLoading, isError, error, isFetching, refetch, isPending, data} = useQuery({
        queryKey:["mostrar pokemon"],
        queryFn: fethPokemons,
      })

      const {} = useQuery({
        queryKey: ["buscar pokemon", buscador],
        queryFn: () => buscarPokemon(buscador),
        enabled:!!buscador
      })

  return (
    <HomeTemplate />
  )
}
