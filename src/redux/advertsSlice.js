import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  adverts: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const adverts = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePending);
    builder.addCase(fetchAdverts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.adverts = payload;
    });
    builder.addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = adverts.reducer;
