import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import currencyReducer from "../currency/currencySlice";
import cartReducer from "../cart/cartSlice";
import userReducer from "../auth/userSlice";
import wishlistReducer from "../cart/wishlistSlice";

const rootReducer = combineReducers({
  // data : reducer
  currency: currencyReducer,
  cart: cartReducer,
  user: userReducer,
  wishlist: wishlistReducer,
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
