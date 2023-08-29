import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";

export interface Private {
  favorites: string[] | null;
  history: string[] | null;
}

export interface AuthState {
  authData: {
    isNotValidData: boolean;
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
  };
  profileData: {
    profile: (User & Private) | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: AuthState = {
  authData: {
    isNotValidData: false,
    accessToken: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  },
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.authData.isLoading = true;
    },
    loginNotValidData(state, action: PayloadAction<boolean>) {
      state.authData.isNotValidData = action.payload;
      state.authData.isLoading = false;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.authData.accessToken = action.payload;
      state.authData.isLoading = false;
      state.authData.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.authData.isLoading = false;
      state.authData.error = action.payload;
    },
    loadingProfileStart(state) {
      state.profileData.isLoading = true;
    },
    loadingProfileSuccess(state: AuthState, action) {
      state.profileData.isLoading = false;
      state.profileData.profile = action.payload;
      state.profileData.error = null;
    },
    loadingProfileFailure(state: AuthState, action) {
      state.profileData.isLoading = false;
      state.profileData.error = action.payload;
    },
    logoutSuccess: () => initialState,
  },
});

export const {
  loginStart,
  loginNotValidData,
  loginSuccess,
  loginFailure,
  loadingProfileStart,
  loadingProfileSuccess,
  loadingProfileFailure,
  logoutSuccess,
} = authReducer.actions;

export default authReducer.reducer;
