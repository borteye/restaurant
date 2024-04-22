import { createSlice } from "@reduxjs/toolkit";
import { DishDetails } from "../../types/dishes";

const initialState = {
  dishes: [],
  categories: [],
  countries: [],
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    DishCatalog: (state, { payload }) => {
      state.dishes = payload.dishes;
      console.log(payload.dishes);
    },
    CategoryCatalog: (state, { payload }) => {
      state.categories = payload.categories;
      console.log(payload.categories);
    },
    CountryCatalog: (state, { payload }) => {
      state.countries = payload.countries;
      console.log(payload.countries);
    },

    LogoutLever: (state) => {},
  },
});

export const { DishCatalog, CategoryCatalog, CountryCatalog, LogoutLever } =
  dishSlice.actions;

// export const countryDishes = (state: DishDetails) => state.
export const selectDishes = ({ dish }: DishDetails) => dish.dishes;
export const selectCategories = ({ dish }: DishDetails) => dish.categories;
export const selectCountries = ({ dish }: DishDetails) => dish.countries;

export default dishSlice.reducer;
