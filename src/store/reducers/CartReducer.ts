import { Action } from "redux";
import { ProductType } from "../../types";
import CartActions from "../actions/CartActions";

interface IAction extends Action {
  payload: ProductType | number;
}
// store_data : State : initialise, immutable
function cartReducer(storeData: ProductType[] = [], action: IAction) {
  switch (action.type) {
    case CartActions.ActionTypes.ADD_TO_CART:
      return [...storeData, action.payload];
    case CartActions.ActionTypes.REMOVE_ITEM:
      return storeData.filter((val) => val.productId !== action.payload);
    default:
      return storeData;
  }
}
export default cartReducer;
