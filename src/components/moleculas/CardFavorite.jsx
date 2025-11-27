import styled from "styled-components"
import { Icon } from "@iconify/react"
import { usePokemonFavoritos } from "../../store/PokemonFavoritosStore"

export const CardFavorite = ({item}) => {

    const {removeFavorite} = usePokemonFavoritos()

    const handleRemove = (id) => {
        removeFavorite(id)
    }

  return (
    <Card className="">
        <Icon onClick={() => handleRemove(item.id)} icon="iconamoon:close-bold" style={{fontSize:30, cursor: "pointer", position: "absolute", right: 10, top: 5}} />
        <ImageWrapper>
            <img src={item.animation} alt="" />
        </ImageWrapper>
    </Card>
  )
}

const Card = styled.div`
    background-color: #192438; 
    border-radius: 10px;
    width: 100px;
    padding: 20px;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 120px;
        height: 120px;
        background-color: ${(props) => props.color};
        right: 0;
        left: 0;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
        filter: blur(70px);

`

const ImageWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    img{
        z-index: 10;
        width: 100%;
    }
`