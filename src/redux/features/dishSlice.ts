import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/user";
import { DishDetails } from "../../types/dishes";

const initialState = {
  allDishes: null,
  dish: null,
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    AllDishes: (state, { payload }) => {
      state.allDishes = payload;
    },
    ActiveCountryDishes: (state, { payload }) => {
      state.dish = payload;
    },
    LogoutLever: (state) => {},
  },
});

export const { ActiveCountryDishes, LogoutLever } = dishSlice.actions;

export const countryDishes = (state: DishDetails) => state.dish;
// export const allDishes = (state: ) => state.

export default dishSlice.reducer;
