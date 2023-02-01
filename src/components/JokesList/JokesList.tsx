import React from 'react';
import {useAppSelector} from "../../redux/hooks";
import Joke from "../Joke/Joke";
import {StyledJokesList} from "./StyledJokesList";

function JokesList() {
  const jokes = useAppSelector(state => state.jokes)
  return (
    <StyledJokesList>
      {jokes?.map(({id, value}) => (
        <Joke key={id} joke={value}/>
      ))}
    </StyledJokesList>
  );
}

export default JokesList;
