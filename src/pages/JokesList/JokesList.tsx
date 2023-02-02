import React from 'react';
import {useAppSelector} from "../../redux/hooks";
import Joke from "../../components/Joke/Joke";
import {StyledJokesList} from "./StyledJokesList";
import Title from "../../styledComponents/Title/Title";
import BasicButtonsMenu from "../../components/BasicButtonsMenu/BasicButtonsMenu";

function JokesList() {
  const jokes = useAppSelector(state => state.jokes.jokes)

  return (
    <>
      <BasicButtonsMenu/>
      <Title text={'JOKES LIST'}/>
      <StyledJokesList>
        {jokes?.map(({id, value, favourite}, i) => (
          <Joke key={id} joke={value} ind={i} favourite={favourite || false}/>
        ))}
      </StyledJokesList>
    </>
  );
}

export default JokesList;
