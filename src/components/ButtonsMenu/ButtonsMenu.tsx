import React from 'react';
import styled from 'styled-components'
import Flex from "../../styledComponents/Flex/Flex";
import GenerateJokeBtn from "../GenerateJokeBtn/GenerateJokeBtn";
import {Route, Routes} from "react-router-dom";

const ButtonsMenuWrapper = styled.div`

`

function ButtonsMenu() {
  return (
    <Flex direction={'row'} align={'center'} justify={'center'} margin={'0'}>
      <Routes>
        <Route path={'/'} element={<GenerateJokeBtn/>}/>
      </Routes>
    </Flex>
  );
}

export default ButtonsMenu;
