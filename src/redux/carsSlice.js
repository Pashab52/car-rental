import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars, } from './operations';

const carsInitialState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
  favoriteCars: [],
  filter: [],
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

    addFavorite(state, action) {
 
      state.favoriteCars = [
        ...state.favoriteCars,
        action.payload,
      ];
    },

    delFavorite(state, action) {
      state.favoriteCars.splice(state.favoriteCars.findIndex((favorite) => favorite.id === action.payload.id),1)},
  },


  extraReducers: (builder) => {
    builder

      .addCase(fetchCars.fulfilled, (state, action) => {
        handleFulfilled(state);

        state.cars.items = [
          ...state.cars.items,
          ...action.payload,
        ];
      })

      .addMatcher(isAnyOf(fetchCars.pending), handlePending)
      .addMatcher(
        isAnyOf(fetchCars.rejected),
        handleRejected
      );
  },
});

export const {
  setFilter,
  addFavorite,
  delFavorite,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

