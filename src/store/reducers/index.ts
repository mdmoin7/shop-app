import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import currencyReducer from "./CurrencyReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  // store_data_variable : reducer
  currency: currencyReducer,
  cart: cartReducer,
  userSession: userReducer,
});
export default rootReducer;
