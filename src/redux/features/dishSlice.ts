import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/user";
import { DishInfo } from "../../types/dishes";

const initialState = {
  dish: [] as DishInfo[],
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    ActiveCountryDishes: (state, { payload }) => {
      state.dish = payload;
    },
    LogoutLever: (state) => {},
  },
});

export const { ActiveCountryDishes, LogoutLever } = dishSlice.actions;

export const countryDishes = ({ dish }: DishInfo) => dish;
console.log(countryDishes);
// export const selectEmail = ({ user }: UserDetails) => user.email;
// export const selectUsername = ({ user }: UserDetails) => user.username;
// export const selectRole = ({ user }: UserDetails) => user.role;
// export const selectstaySignedIn = (state: UserDetails) => state.staySignedIn;

export default dishSlice.reducer;
