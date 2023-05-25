import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const catFactSlice = createSlice({
  name: 'catFact',
  initialState: {
    fact: null,
    loading: false,
    error: null,
    favs: [],
  },
  reducers: {
    fetchCatFactStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCatFactSuccess(state, action) {
      state.loading = false;
      state.fact = action.payload;
    },
    fetchCatFactFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addFavorite(state, action) {
        state.favs = action.payload;

    }
  },
});

export const { fetchCatFactStart, fetchCatFactSuccess, fetchCatFactFailure, addFavorite  } = catFactSlice.actions;

export const fetchCatFact = () => async (dispatch) => {
  dispatch(fetchCatFactStart());
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    dispatch(fetchCatFactSuccess(response.data.fact));
  } catch (error) {
    dispatch(fetchCatFactFailure(error.message));
  }
};

export default catFactSlice.reducer;
 