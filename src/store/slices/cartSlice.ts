import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types";
import { RootState } from "..";

export type CartItem = {
  product: ProductType;
  quantity: number;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      const existing = state.find(
        (item) => item.product.productId === action.payload.productId,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ product: action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.product.productId !== action.payload);
    },

    decrementItem: (state, action: PayloadAction<number>) => {
      const existing = state.find(
        (item) => item.product.productId === action.payload,
      );

      if (!existing) return;

      if (existing.quantity === 1) {
        return state.filter(
          (item) => item.product.productId !== action.payload,
        );
      }

      existing.quantity -= 1;
    },

    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeItem, decrementItem, clearCart } =
  cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart;

export const selectCartCount = (state: RootState) =>
  state.cart.reduce((acc, item) => acc + item.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  state.cart.reduce(
    (acc, item) => acc + item.quantity * item.product.productPrice,
    0,
  );

export default cartSlice.reducer;
