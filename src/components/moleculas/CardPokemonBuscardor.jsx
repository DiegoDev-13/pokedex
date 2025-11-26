import styled from "styled-components"
import { usePokemonStore } from "../../store/PokemonStore"
import { Icon } from "@iconify/react"

export const CardPokemonBuscardor = ({item}) => {

    const {pokemonBuscado} = usePokemonStore()

    if(pokemonBuscado === null || (Array.isArray(pokemonBuscado) && pokemonBuscado.length === 0)) return (<Icon style={{fontSize:80}} icon="fluent-emoji-flat:avocado" />)

        

  return (
    <Container className="" color={pokemonBuscado.color}>
         <Number color="#7dec1c">{pokemonBuscado.id}</Number>
         <ImageWrapper>
            <img src={pokemonBuscado.image} alt="" />
         </ImageWrapper>
         <Name>
            {pokemonBuscado.name}
         </Name>
         <SmallImage src={pokemonBuscado.animation}/>
    </Container>
  )
}

const Container = styled.div`
    background-color: #192438; 
    border-radius: 10px;
    width: 200px;
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

    }
`

const Number = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    color: ${(props) => props.color};
    font-weight: 700;
`

const ImageWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    img{
        z-index: 10;
        width: 100%;
    }
`

const Name = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
`

const SmallImage = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
`