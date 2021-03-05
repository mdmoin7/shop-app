import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import currencyReducer from "./CurrencyReducer";

const rootReducer = combineReducers({
  // store_data_variable : reducer
  currency: currencyReducer,
  cart: cartReducer,
});
export default rootReducer;
