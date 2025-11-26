import styled from "styled-components"
import { usePokemonStore } from "../../store/PokemonStore"
import { CardPokemonList } from "../moleculas/CardPokemonList"
import {useQueryClient} from "@tanstack/react-query"
import { BeatLoader } from "react-spinners";

export const ListaPokemons = () => {

  const {pokemons} = usePokemonStore()

  const queryClient = useQueryClient()

  const queryState = queryClient.getQueryState(["mostrar pokemon"])
  const status = queryState?.status
  const error = queryState?.error

  if(status === 'pending') {
    return <BeatLoader color="#fff" />
  }

  

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  if(status === 'success') {
    return (
    <Container className="">
        {
          pokemons.map((item, index) => (
            <div key={index}>
              <CardPokemonList item={item} />
            </div>
          ))
        }

        <button>Ver Mas</button>
    </Container>
  )
  }


}

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`