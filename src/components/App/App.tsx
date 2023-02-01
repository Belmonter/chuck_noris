import React from 'react';
import Container from "../../styledComponents/Container/Container";
import ButtonsMenu from "../ButtonsMenu/ButtonsMenu";
import JokesList from "../JokesList/JokesList";
import styled from "styled-components";

const StyledApp = styled.div`
  margin-top: 30px;
`

function App() {
  let result;

  if (result) console.log(result)

  return (
    <Container>
      <StyledApp>
        <ButtonsMenu/>
        <JokesList/>
      </StyledApp>
    </Container>
  );
}

export default App;
