import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars, } from './operations';

const carsInitialState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

 

const handlePending = state => {
  state.cars.isLoading = true;
};

const handleRejected = (state, action) => {
  state.cars.isLoading = false;
  state.cars.error = action.payload;
};

const handleFulfilled = state => {
  state.cars.isLoading = false;
  state.cars.error = null;
}

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchCars.fulfilled, (state, action) => {
        handleFulfilled(state);

        state.cars.items = [...action.payload];
      })

      .addMatcher(isAnyOf(fetchCars.pending), handlePending)
      .addMatcher(
        isAnyOf(fetchCars.rejected),
        handleRejected
      );
  },
});

export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

