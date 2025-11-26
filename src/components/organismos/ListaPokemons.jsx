import styled from "styled-components"
import { usePokemonStore } from "../../store/PokemonStore"
import { usePokemonFavoritos } from "../../store/PokemonFavoritosStore"
import { CardPokemonList } from "../moleculas/CardPokemonList"
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query"
import { BeatLoader } from "react-spinners";
import {Heart} from "../moleculas/Heart"

export const ListaPokemons = () => {

  const {pokemons, fethPokemons} = usePokemonStore()
  const {favorites, addFavorite, removeFavorite} = usePokemonFavoritos()

  //Funtion add favorites
  const handleFavoriteClick = (pokemon) => {
    const isFavorite = favorites.some((fav) => fav.id === pokemon.id);
    if(isFavorite) {
      removeFavorite(pokemon.id)
    } else {
      addFavorite(pokemon)
    }
  }

  //Uso de infiniteQuery
  const {hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey:["mostrar pokemon"],
        queryFn: fethPokemons,
        getNextPageParam: (lastPage) => lastPage.hasNextPage?lastPage.nextPage:undefined,
        initialPageParam: 0,
        refetchOnWindowFocus: false
      })


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
        <section className="contentpokemon">
          {
          pokemons.map((item, index) => {
            const isFavorite = favorites.some((favorites) => favorites.id === item.id)

            return (
              <div key={index} className="contentCard">
                <Heart state={isFavorite} funcion={() => handleFavoriteClick(item)}/>
                <CardPokemonList item={item} />
              </div>
            )
          })
        }
        </section>

        <button disabled={!hasNextPage || isFetchingNextPage} onClick={fetchNextPage}>{isFetchingNextPage?"Cargando...":hasNextPage?"Cargar Mas":"Fin de Pokemons"}</button>
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
  button{
    padding: 10px 20px;
    border: none;
    background-color: #2d3748;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    width: 50%;
    align-self: center;
    &:disabled {
      background-color: #a0aec0;
      cursor: not-allowed;
      }
    }
    
  .contentpokemon{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;

    .contentCard {
      position: relative;
    }
  } 
`