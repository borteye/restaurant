import { createSlice } from "@reduxjs/toolkit";
import { CountryDetails } from "../../types/dishes";

const initialState = {
  country: null,
  countryid: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    ActiveFilter: (state, { payload }) => {
      state.country = payload.country;
      state.countryid = payload.countryid;
    },
    SessionResetFilter: (state) => {
      state.country = null;
    },
  },
});

export const { ActiveFilter, SessionResetFilter } = filterSlice.actions;

export const selectCountry = ({ filter }: CountryDetails) => filter.country;
export const selectCountryId = ({ filter }: CountryDetails) => filter.countryid;

export default filterSlice.reducer;
