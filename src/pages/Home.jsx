import { usePokemonStore } from '../store/PokemonStore'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from "react-spinners";
import { HomeTemplate } from '../components/templates/HomeTemplate';

export const Home = () => {
    const { fethPokemons} = usePokemonStore()
      const {isLoading, isError, error} = useQuery({
        queryKey:["mostrar pokemons"],
        queryFn: fethPokemons
      })
    
      if(isLoading) {
        return <BeatLoader color="#fff" />
      }

      if (isError) {
        return <span>Error: {error.message}</span>
    }

  return (
    <HomeTemplate />
  )
}
