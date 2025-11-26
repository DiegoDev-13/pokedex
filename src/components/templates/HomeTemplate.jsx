import styled from "styled-components"
import { Header } from "../organismos/Header"
import { CardPokemonBuscardor } from "../moleculas/CardPokemonBuscardor"
import { useIsFetching } from "@tanstack/react-query"
import {ListaPokemons} from "../organismos/ListaPokemons"

export const HomeTemplate = () => {

  const isFeching = useIsFetching({
    queryKey:["buscar pokemon"]
  })

  return (
    <Container className="">
        <Header />
        {
          isFeching > 0 && <span>Feching</span>
        }
        <CardPokemonBuscardor />
        <ListaPokemons/>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`