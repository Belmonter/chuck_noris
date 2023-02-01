import React from 'react';
import Flex from "../../styledComponents/Flex/Flex";
import GenerateJokeBtn from "../GenerateJokeBtn/GenerateJokeBtn";
import FavouriteBtn from "../FavouriteBtn/FavouriteBtn";

function BasicButtonsMenu() {
  return (
    <Flex direction={'row'} align={'center'} justify={'center'} margin={'0'} gap={'10px'}>
      <>
        <GenerateJokeBtn/>
        <FavouriteBtn/>
      </>
    </Flex>
  );
}

export default BasicButtonsMenu;
