import React from 'react';
import Button from "../../styledComponents/Button/Button";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addJoke} from "../../redux/slice/JokesSlice";

function GenerateJokeBtn() {

  const dispath = useAppDispatch()

  const clickHandle = () => {
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => dispath(addJoke(res)));
  }

  return (
    <Button getJoke={clickHandle}>
      <span>Generate Jokes</span>
    </Button>
  );
}

export default GenerateJokeBtn;
