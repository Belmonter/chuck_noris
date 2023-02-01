import React from 'react';
import Container from "../../styledComponents/Container/Container";
import JokesList from "../../pages/JokesList/JokesList";
import {Route, Routes} from "react-router-dom";
import FavoriteJokes from "../../pages/FavouriteJokesList/FavoriteJokes";

function App() {

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
