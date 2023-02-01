import React from 'react';
import {StyledJokesList} from "../JokesList/StyledJokesList";
import Title from "../../styledComponents/Title/Title";
import FavouriteButtonsMenu from "../../components/FavouriteButtonsMenu/FavouriteButtonsMenu";

function FavoriteJokes() {
  return (
    <>
      <FavouriteButtonsMenu/>
      <Title text={'FAVOURITE JOKE LIST'}/>
      <StyledJokesList>
        <span>LIST</span>
      </StyledJokesList>
    </>
  );
}

export default FavoriteJokes;
