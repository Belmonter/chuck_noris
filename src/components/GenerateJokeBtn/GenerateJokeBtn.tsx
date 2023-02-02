import React, {useEffect, useState} from 'react';
import Button from "../../styledComponents/Button/Button";
import {useAppDispatch} from "../../redux/hooks";
import {addJoke} from "../../redux/slice/JokesSlice";

function GenerateJokeBtn() {
  const [fetchJokes, setFetchJokes] = useState(false)
  const dispatch = useAppDispatch()

  let interval: NodeJS.Timer;

  useEffect(() => {
    if (fetchJokes) {
      interval = setInterval(() => {
        fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => dispatch(addJoke(res)));
      }, 3000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [fetchJokes])

  return (
    <Button onClick={() => setFetchJokes(fetchJokes => !fetchJokes)}>
      <span>{fetchJokes ? 'Stop getting Jokes' : 'Get jokes'}</span>
    </Button>
  );
}

export default GenerateJokeBtn;
