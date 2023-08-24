import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SignUpState {
  isNotValidLogin: boolean;
  isNotValidEmail: boolean;
  isLoading: boolean;
  error: null | string;
}

const initialState: SignUpState = {
  isNotValidLogin: false,
  isNotValidEmail: false,
  isLoading: false,
  error: null,
};

export const signUpReducer = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUpStart(state) {
      state.isLoading = true;
    },
    signUpNotValidLogin(state, action: PayloadAction<boolean>) {
      state.isNotValidLogin = action.payload;
      state.isLoading = false;
    },
    signUpNotValidEmail(state, action: PayloadAction<boolean>) {
      state.isNotValidEmail = action.payload;
      state.isLoading = false;
    },
    signUpSuccess(state) {
      state.isLoading = false;
      state.isNotValidEmail = false;
      state.isNotValidLogin = false;
      state.error = null;
    },
    signUpFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signUpStart,
  signUpNotValidLogin,
  signUpNotValidEmail,
  signUpSuccess,
  signUpFailure,
} = signUpReducer.actions;

export default signUpReducer.reducer;
