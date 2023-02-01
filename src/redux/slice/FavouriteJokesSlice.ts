import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FavouriteJokesSlice {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

const initialState: FavouriteJokesSlice[] = [];

export const jokesSlice = createSlice({
  name: 'favourite_jokes',
  initialState,
  reducers: {
    addJoke(state, action: PayloadAction<FavouriteJokesSlice>) {
      state.push(action.payload)
    },
    delJoke(state, action: PayloadAction<FavouriteJokesSlice>) {
      state.push(action.payload)
    }

  }
})

export const jokesReducer = jokesSlice.reducer;
export const {addJoke} = jokesSlice.actions;
