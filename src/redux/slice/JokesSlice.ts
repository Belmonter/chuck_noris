import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IJoke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  favourite?: boolean
}

interface jokesData {
  jokes: IJoke[],
  favouriteJokes: IJoke[]
}

interface Favourite {
  ind: number,
  favourite: boolean,
}

const initialState: jokesData = {
  jokes: [],
  favouriteJokes: []
};

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    addJoke(state, action: PayloadAction<IJoke>) {
      state.jokes.push({...action.payload, favourite: false})
    },
    addFavourite(state, action: PayloadAction<Favourite>) {
      const {ind, favourite} = action.payload
      if (state.jokes[ind]) {
        state.jokes[ind]['favourite'] = favourite
      }
      if (state.favouriteJokes.length === 10 && favourite) {
        let firstElementInd = state.jokes.findIndex((el) => el['value'] === state.favouriteJokes[0]['value'])
        if (firstElementInd >= 0) {
          state.jokes[firstElementInd]['favourite'] = false;
        }

        state.favouriteJokes.shift()
        state.favouriteJokes.push(state.jokes[ind])
        localStorage.setItem('favourites', JSON.stringify(state.favouriteJokes))
      } else {
        if (favourite) {
          state.favouriteJokes.push(state.jokes[ind])
          localStorage.setItem('favourites', JSON.stringify(state.favouriteJokes))
        } else {
          let elementInd = state.favouriteJokes.findIndex((el) => el['value'] === state.jokes[ind]['value'])
          state.favouriteJokes.splice(elementInd, 1);
          localStorage.setItem('favourites', JSON.stringify(state.favouriteJokes))
        }
      }
    },
    deleteFavouriteJoke(state, action) {
      const {listInd, joke} = action.payload;
      const listIndex = state.jokes.findIndex((el) => el['value'] === state.favouriteJokes[listInd]['value'])
      if (listIndex >= 0) {
        state.jokes[listIndex]['favourite'] = false;
      }
      state.favouriteJokes.forEach((el, i) => {
        if (el['value'] === joke) {
          state.favouriteJokes.splice(i, 1);
          localStorage.setItem('favourites', JSON.stringify(state.favouriteJokes))
        }
      })
    },
    checkLocalJokes(state) {
      if (localStorage.getItem('favourites')) {
        state.favouriteJokes = JSON.parse(localStorage.getItem('favourites') || '')
      }
    },
    clearFavourites(state) {
      state.jokes.forEach(el => el['favourite'] = false);
      state.favouriteJokes.length = 0;
      localStorage.clear();
    }
  }
})

export const jokesReducer = jokesSlice.reducer;
export const {addJoke, addFavourite, clearFavourites, checkLocalJokes, deleteFavouriteJoke} = jokesSlice.actions;
