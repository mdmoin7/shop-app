import { ProductType } from "../../types";

const ActionTypes = {
  ADD_TO_CART: "[Cart] Add to Cart",
  REMOVE_ITEM: "[Cart] Remove item",
};

const addToCart = (product: ProductType) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

const removeItem = (id: number) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: id,
  };
};

const CartActions = { addToCart, removeItem, ActionTypes };
export default CartActions;
