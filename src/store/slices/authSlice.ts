import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../types/Types";

interface AuthState {
  accessToken: null | string;
  profile: Profile | null;
}

const initialState: AuthState = {
  accessToken: null,
  profile: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setProfile(state, action: PayloadAction<Profile>) {
      state.profile = action.payload;
    },
    setInitialState: () => initialState,
  },
});

export const { setAccessToken, setProfile, setInitialState } =
  authReducer.actions;

export default authReducer.reducer;
