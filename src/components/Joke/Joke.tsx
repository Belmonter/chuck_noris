import React from 'react';
import heart from '../../assets/img/svg/heart.svg'
import redHeart from '../../assets/img/svg/red_heart.svg'
import {useAppDispatch} from "../../redux/hooks";
import {addFavourite, deleteFavouriteJoke} from "../../redux/slice/JokesSlice";
import {StyledJoke, Styles} from './Styles'


interface JokeProps {
  joke: string,
  ind: number,
  favourite?: boolean,
  favouriteList?: boolean,
}

function Joke({joke, ind, favourite, favouriteList}: JokeProps) {
  const dispatch = useAppDispatch();

  const onHeartClick = () => {
    if (!favouriteList) {
      dispatch(addFavourite({ind, favourite: !favourite}))
    } else {
      dispatch(deleteFavouriteJoke({listInd: ind, joke}))
    }
  }

  return (
    <StyledJoke>
      <span>{joke}</span>
      <Styles src={favourite ? redHeart : heart} alt="heart" onClick={onHeartClick}/>
    </StyledJoke>
  );
}

export default Joke;
