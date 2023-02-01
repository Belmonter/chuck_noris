import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

const initialState: Joke[] = [];

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    addJoke(state, action: PayloadAction<Joke>) {
      state.push(action.payload)
    }
  }
})

export const jokesReducer = jokesSlice.reducer;
export const {addJoke} = jokesSlice.actions;
