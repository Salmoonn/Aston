import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile } from "../../types/Types";

interface AuthState {
  accessToken: null | string;
  profile: Profile | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  profile: null,
  isLoading: true,
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
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    removeHistory(state) {
      if (state.profile) {
        state.profile.history = null;
      }
    },
    logout(state) {
      state.profile = null;
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, setProfile, setLoading, logout, removeHistory } =
  authReducer.actions;

export default authReducer.reducer;
