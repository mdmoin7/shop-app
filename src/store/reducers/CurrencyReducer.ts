import { Action } from "redux";
import CurrencyActions from "../actions/CurrencyActions";

interface IAction extends Action {
  payload: string;
}
// reducer(store_data, action)
// store_data : state : initialise
function currencyReducer(storeData = "INR", action: IAction) {
  switch (action.type) {
    case CurrencyActions.ActionTypes.UPDATE_CURRENCY:
      // return the updated currency code
      return action.payload;
    default:
      return storeData; // current store data
  }
}
export default currencyReducer;
