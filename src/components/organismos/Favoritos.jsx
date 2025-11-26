import styled from "styled-components"
import { usePokemonFavoritos } from "../../store/pokemonFavoritosStore"
import { CardFavorite } from "../moleculas/CardFavorite"

export const Favoritos = () => {
    const {favorites} = usePokemonFavoritos()


  return (
    <Container className="">
        {
            favorites.map((item, index) => {
                return (
                    <CardFavorite key={index} item={item} />
                )
            })
        }
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    gap: 20px;
`
