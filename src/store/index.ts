import { createStore } from "redux";
import currencyReducer from "./reducers/CurrencyReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const appStore = createStore(currencyReducer, composeWithDevTools());

export default appStore;
