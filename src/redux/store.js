import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from "./carsSlice"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "cars",
  storage,
  whitelist: ["favoriteCars"],
};

const persistedReducer = persistReducer(persistConfig, carsReducer);


// export const store = configureStore({
//   reducer: carsReducer,
// });


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

