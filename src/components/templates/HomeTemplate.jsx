import styled from "styled-components"
import { Header } from "../organismos/Header"
import { CardPokemonBuscardor } from "../moleculas/CardPokemonBuscardor"
import { useIsFetching } from "@tanstack/react-query"

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
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`