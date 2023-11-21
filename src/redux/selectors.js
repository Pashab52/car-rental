import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.items;
export const selectFavCars = (state) => state.favoriteCars;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

// export const selectFilterContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterData) => {
//     const normalizedFilter = filterData.toLowerCase();
//     const filterContactsData = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return filterContactsData;
//   }
// );
