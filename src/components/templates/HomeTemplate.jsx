import styled from "styled-components"
import { Header } from "../organismos/Header"
import { CardPokemonBuscardor } from "../moleculas/CardPokemonBuscardor"
import { useIsFetching } from "@tanstack/react-query"
import {ListaPokemons} from "../organismos/ListaPokemons"
import { Icon } from "@iconify/react"
import { usePokemonStore } from "../../store/PokemonStore"
import { BeatLoader } from "react-spinners";
import { Favoritos } from "../organismos/Favoritos"
import { usePokemonFavoritos } from "../../store/pokemonFavoritosStore"

export const HomeTemplate = () => {

  const {pokemonCount} = usePokemonStore()
  const {favorites, clearFavorites} = usePokemonFavoritos()

  const isFeching = useIsFetching({
    queryKey:["buscar pokemon"]
  })

  return (
    <Container className="">
        <Header />
        <section className="visor">
          <article className="area1">
            {isFeching > 0 ?(<BeatLoader color="#fff" size={25}/>):(<CardPokemonBuscardor />)}

          </article>
          <article className="area2">
            {
              favorites.length > 0? <button classNem="btnClear" onClick={clearFavorites}>Limpiar</button> : ''
            }
            <Favoritos />
          </article>
        </section>
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

  .visor {
    display: flex;
    align-items: center;
    overflow-y: auto;
    padding: 20px;
  }
  .area2 {
    display: flex;
    width: 100%;
    gap: 20px
    
  }
    button {
      background-color: #f04343;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
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