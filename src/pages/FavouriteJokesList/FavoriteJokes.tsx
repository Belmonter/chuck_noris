import React, {useEffect, useState} from 'react';
import {StyledJokesList} from "../JokesList/StyledJokesList";
import Title from "../../styledComponents/Title/Title";
import FavouriteButtonsMenu from "../../components/FavouriteButtonsMenu/FavouriteButtonsMenu";
import {useAppSelector} from "../../redux/hooks";
import Joke from "../../components/Joke/Joke";

function FavoriteJokes() {
  const favouriteJokes = useAppSelector(state => state.jokes.favouriteJokes)

  return (
    <>
      <FavouriteButtonsMenu/>
      <Title text={'FAVOURITE JOKE LIST'}/>
      <StyledJokesList>
        {favouriteJokes.map(({value, favourite, id}, i) => (
          <Joke key={id} joke={value} ind={i} favourite={favourite} favouriteList={true}/>
        ))}
      </StyledJokesList>
    </>
  );
}

export default FavoriteJokes;
