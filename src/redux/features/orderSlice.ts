import { createSlice } from "@reduxjs/toolkit";
import { OrderHistoryDishes } from "../../types/orders";

const initialState = {
  dishes: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    ActiveOrderHistory: (state, { payload }) => {
      const orderDetails = payload.map((items: any) => JSON.parse(items));
      console.log(orderDetails);
      state.dishes = orderDetails;
    },
    LogoutLever: (state) => {},
  },
});

export const { ActiveOrderHistory, LogoutLever } = orderSlice.actions;

export const selectedOrder = ({ order }: OrderHistoryDishes) => order.dishes ;

export default orderSlice.reducer;
