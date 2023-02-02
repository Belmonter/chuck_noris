import React, {useEffect} from 'react';
import Container from "../../styledComponents/Container/Container";
import JokesList from "../../pages/JokesList/JokesList";
import {Route, Routes} from "react-router-dom";
import FavoriteJokes from "../../pages/FavouriteJokesList/FavoriteJokes";
import {useAppDispatch} from "../../redux/hooks";
import {checkLocalJokes} from "../../redux/slice/JokesSlice";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkLocalJokes())
  }, [])

  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<JokesList/>}/>
        <Route path={'/favourites'} element={<FavoriteJokes/>}/>
      </Routes>
    </Container>
  );
}

export default App;
