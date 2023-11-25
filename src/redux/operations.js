import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



axios.defaults.baseURL =
  "https://655937ffe93ca47020aa2450.mockapi.io/api/";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/adverts", {
        params: {
          page: page,
          limit: 12,
        },
      });

      

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);





