import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import currencyReducer from "./slices/currencySlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  // data : reducer
  currency: currencyReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "@shop-app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating a global store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// type of the store
export type RootState = ReturnType<typeof store.getState>;
