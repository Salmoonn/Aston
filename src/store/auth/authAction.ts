import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { LoginRequest } from "../../api/auth/types";
import {
  loadingProfileFailure,
  loadingProfileStart,
  loadingProfileSuccess,
  loginFailure,
  loginNotValidData,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./authReducer";

export const loginUser =
  (data: LoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);

      if (res.data.isNotValidData) {
        dispatch(loginNotValidData(true));
      } else if (res.data.accessToken) {
        dispatch(loginSuccess(res.data.accessToken));
        dispatch(getProfile());
      }
    } catch (err: any) {
      console.error(err);

      dispatch(loginFailure(err.message));
    }
  };

export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      await api.auth.logout();

      dispatch(logoutSuccess());
    } catch (err) {
      console.error(err);
    }
  };

export const getProfile =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(loadingProfileStart());

      const res = await api.auth.getProfile();

      dispatch(loadingProfileSuccess(res.data));
    } catch (err: any) {
      console.error(err);

      dispatch(loadingProfileFailure(err.message));
    }
  };
