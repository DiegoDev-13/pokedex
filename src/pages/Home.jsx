import styled from 'styled-components'
import { usePokemonStore } from '../store/PokemonStore'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from "react-spinners";

export const Home = () => {
    const {pokemons, fethPokemons} = usePokemonStore()
      const {isLoading, isError, data , error} = useQuery({
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
    <Container className="">
        {
            pokemons.results.map((item, index) => (
                <h4 key={index}>{item.name}</h4>
            ))
        }
    </Container>
  )
}

const Container = styled.div`

`