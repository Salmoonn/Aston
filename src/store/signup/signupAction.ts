import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { SignUpRequest } from "../../api/signup/types";
import { getProfile } from "../auth/authAction";
import { loginSuccess } from "../auth/authReducer";
import {
  signUpFailure,
  signUpNotValidEmail,
  signUpNotValidLogin,
  signUpStart,
  signUpSuccess,
} from "./signupReducer";

export const SignupUser =
  (data: SignUpRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(signUpStart());

      const res = await api.signup.signUp(data);

      res.data.isNotValidLogin && dispatch(signUpNotValidLogin(true));
      res.data.isNotValidEmail && dispatch(signUpNotValidEmail(true));

      if (res.data.accessToken) {
        dispatch(signUpSuccess());
        dispatch(loginSuccess(res.data.accessToken));
        dispatch(getProfile());
      }
    } catch (err: any) {
      console.error(err);

      dispatch(signUpFailure(err.message));
    }
  };
