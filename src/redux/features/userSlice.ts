import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/user";

const initialState = {
  id: null,
  email: null,
  username: null,
  role: null,
  staySignedIn: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ActiveGate: (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.username = payload.username;
      state.role = payload.role;
      state.staySignedIn = payload.staySignedIn;
    },
    LogoutLever: (state) => {
      state.email = null;
      state.id = null;
      state.username = null;
      state.role = null;
      state.staySignedIn = null;
    },
  },
});

export const { ActiveGate, LogoutLever } = userSlice.actions;

export const selectId = ({ user }: UserDetails) => user.id;
export const selectEmail = ({ user }: UserDetails) => user.email;
export const selectUsername = ({ user }: UserDetails) => user.username;
export const selectRole = ({ user }: UserDetails) => user.role;
export const selectstaySignedIn = (state: UserDetails) => state.staySignedIn;

export default userSlice.reducer;
