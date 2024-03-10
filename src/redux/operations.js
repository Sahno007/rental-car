import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://652007bc906e276284c3ed72.mockapi.io';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/advert');
    return response.data;
  } catch (e) {
    toast.error('Oops... Something went wrong! Try again!');
    return thunkAPI.rejectWithValue(e.message);
  }
});
