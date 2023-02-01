import React from 'react';
import Flex from "../../styledComponents/Flex/Flex";
import ClearJokesBtn from "../ClearJokesBtn/ClearJokesBtn";
import JokeListBtn from "../JokeListBtn/JokeListBtn";

function FavouriteButtonsMenu() {
  return (
    <Flex direction={'row'} align={'center'} justify={'center'} margin={'0'} gap={'10px'}>
      <>
        <ClearJokesBtn/>
        <JokeListBtn/>
      </>
    </Flex>
  );
}

export default FavouriteButtonsMenu;
