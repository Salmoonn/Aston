import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile } from "../../types/Types";

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
    removeHistory(state) {
      if (state.profile) {
        state.profile.history = null;
      }
    },
    setInitialState: () => initialState,
  },
});

export const { setAccessToken, setProfile, setInitialState, removeHistory } =
  authReducer.actions;

export default authReducer.reducer;
