import styled from "styled-components"
import { Header } from "../organismos/Header"
import { CardPokemonBuscardor } from "../moleculas/CardPokemonBuscardor"
import { useIsFetching } from "@tanstack/react-query"
import {ListaPokemons} from "../organismos/ListaPokemons"
import { Icon } from "@iconify/react"
import { usePokemonStore } from "../../store/PokemonStore"

export const HomeTemplate = () => {

  const {pokemonCount} = usePokemonStore()

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
        <CotainerContador>
          <Icon className="icono" icon="ic:twotone-catching-pokemon" />
          {pokemonCount} Pokemons
        </CotainerContador>
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
  const CotainerContador = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 25px;

  .icono {
    font-size: 30px;
  }
`