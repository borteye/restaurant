import { createSlice } from "@reduxjs/toolkit";

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

export const selectCountry = (state: any) => state.country;
export const selectCountryId = (state: any) => state.countryid;

export default filterSlice.reducer;
