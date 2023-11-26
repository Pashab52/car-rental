import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.items;
export const selectFavCars = (state) => state.favoriteCars;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFilterCars = createSelector(
    [selectCars, selectFilter],
    (cars, filterData) => {

      if (!filterData[0] && filterData.length) {
        const filterCarsData = cars.filter(
          (car) =>
            Number(car.rentalPrice.split("$")[1]) <
            filterData[1]
        );
        return filterCarsData;
      } else
          if (filterData[0] && filterData.length) {
        const filterCarsData = cars.filter(
          (car) =>
            car.make === filterData[0] &&
            Number(car.rentalPrice.split("$")[1]) <= filterData[1]
        );
        return filterCarsData;
            }
      const filterCarsData = cars;
      return filterCarsData;
    }
);
