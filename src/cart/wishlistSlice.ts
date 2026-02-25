import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../products/types";

type WishlistState = {
  items: ProductType[];
};

const initialState: WishlistState = {
  items: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<ProductType>) => {
      const exists = state.items.find(
        (item) => item.productId === action.payload.productId,
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => item.productId !== action.payload.productId,
        );
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },

    clearWishlist: (state) => {
      state.items = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
