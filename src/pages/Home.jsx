import { usePokemonStore } from '../store/PokemonStore'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { HomeTemplate } from '../components/templates/HomeTemplate';

export const Home = () => {
    const { fethPokemons, buscarPokemon, buscador} = usePokemonStore()

      const {} = useQuery({
        queryKey: ["buscar pokemon", buscador],
        queryFn: () => buscarPokemon(buscador),
        enabled:!!buscador
      })

  return (
    <HomeTemplate />
  )
}
