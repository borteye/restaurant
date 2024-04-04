import { createSelector, createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/user";
import { CartDetails, CartState } from "../../types/dishes";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    updateCart: (state, { payload }) => {
      state.items.map((item) => {
        if (item.dishid === payload.dishid) {
          item.quantity += 1;
          item.totalPrice = item.price * item.quantity;
        }
      });
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((doc) => doc.dishid !== payload);
    },
    increaseQuantity: (state, { payload }) => {
      state.items.map((item) => {
        if (item.dishid === payload) {
          item.quantity += 1;
          item.totalPrice = item.price * item.quantity;
        }
      });
    },
    decreaseQuantity: (state, { payload }) => {
      state.items.map((item) => {
        if (item.dishid === payload) {
          item.quantity -= 1;
          item.totalPrice = item.price * item.quantity;
        }
      });
    },
    defaultCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  defaultCart,
} = cartSlice.actions;

export const cartItems = ({ cart }: CartDetails) => cart.items;

export default cartSlice.reducer;
