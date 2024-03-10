import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterMake: '',
  filterPrice: '',
  filterMileage: {
    from: '',
    to: '',
  },
  isFiltred: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter(state, { payload }) {
      state.isFiltred = true;
      state.filterMake = payload.make;
      state.filterPrice = payload.price;
      state.filterMileage.from = payload.from;
      state.filterMileage.to = payload.to;
    },
    resetFilter(state, { payload }) {
      state.filterMake = '';
      state.filterPrice = '';
      state.filterMileage.from = '';
      state.filterMileage.to = '';
      state.isFiltred = false;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { getFilter, resetFilter } = filterSlice.actions;
