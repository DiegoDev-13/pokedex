import styled from "styled-components"
import { Header } from "../organismos/Header"

export const HomeTemplate = () => {

  return (
    <Container className="">
        <Header />
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`