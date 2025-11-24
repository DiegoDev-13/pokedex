import styled from "styled-components"
import { usePokemonStore } from "../../store/PokemonStore"
import { CardPokemonList } from "../moleculas/CardPokemonList"

export const ListaPokemons = () => {

  const {pokemons} = usePokemonStore()

  return (
    <Container className="">
        {
          pokemons.results.map((item, index) => (
            <div key={index}>
              <CardPokemonList item={item} />
            </div>
          ))
        }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`