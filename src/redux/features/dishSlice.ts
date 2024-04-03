import { createSlice } from "@reduxjs/toolkit";
import { DishDetails } from "../../types/dishes";

const initialState = {
  dishes: [],
  dish: null,
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    DishCatalog: (state, { payload }) => {
      state.dishes = payload;
    },
    
    LogoutLever: (state) => {},
  },
});

export const { DishCatalog, LogoutLever } =
  dishSlice.actions;

// export const countryDishes = (state: DishDetails) => state.
export const dishes = ({dish}: DishDetails) => dish.dishes;

export default dishSlice.reducer;
