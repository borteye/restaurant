import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/user";
import { BasicCartInfo, CartDetails } from "../../types/dishes";

const initialState: CartDetails[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.push(payload);
    },
    updateCart: (state, { payload }) => {
      return state.forEach((item) => {
        const cart = item.cart;
        cart?.map((item) => {
          if (item?.dishid === payload.dishid) {
            item.quantity += 1;
            item.totalPrice = item.price * item.quantity;
          }
        });
      });
      // state.map((cart) => {
      //   if (cart.cart. === payload) {
      //     item.quantity += 1;
      //     item.total_price = item.price * item.quantity;
      //   }
      // });
    },
    defaultCart: (state) => {
      return (state = []);
    },
  },
});

export const { addToCart, updateCart, defaultCart } = cartSlice.actions;

export const cartItems = ({ cart }: CartDetails) => cart;

export default cartSlice.reducer;
