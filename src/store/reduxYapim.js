import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};



const mySlice = createSlice({
  name: "myReducer",
  initialState,
  reducers: {
    getFavsFromLocalStorage: (state) => {
      // İşlemleri buraya ekleyin
      return state;
    },
    addFav: (state, action) => {
      // İşlemleri buraya ekleyin
      return state;
    },
    removeFav: (state, action) => {
      // İşlemleri buraya ekleyin
      return state;
    },
    fetchSuccess: (state) => {
      // İşlemleri buraya ekleyin
      return state;
    },
    fetchLoading: (state) => {
      // İşlemleri buraya ekleyin
      return state;
    },
    fetchError: (state) => {
      // İşlemleri buraya ekleyin
      return state;
    },
  },
});

export const {
  getFavsFromLocalStorage,
  addFav,
  removeFav,
  fetchSuccess,
  fetchLoading,
  fetchError,
} = mySlice.actions;

export default mySlice.reducer;
