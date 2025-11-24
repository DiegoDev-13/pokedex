import styled from "styled-components"
import { ListaPokemons } from "../organismos/ListaPokemons"

export const HomeTemplate = () => {
  return (
    <Container className="">
        <ListaPokemons />
    </Container>
  )
}

const Container = styled.div`

`