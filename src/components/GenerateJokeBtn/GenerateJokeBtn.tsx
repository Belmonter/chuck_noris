import React from 'react';
import Button from "../../styledComponents/Button/Button";
import {useAppDispatch} from "../../redux/hooks";
import {addJoke} from "../../redux/slice/JokesSlice";

function GenerateJokeBtn() {

  const dispatch = useAppDispatch()

  const clickHandle = () => {
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => dispatch(addJoke(res)));
  }

  return (
    <Button onClick={clickHandle}>
      <span>Generate Jokes</span>
    </Button>
  );
}

export default GenerateJokeBtn;
