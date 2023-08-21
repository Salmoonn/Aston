import { Dispatch } from "@reduxjs/toolkit";
import { store } from "../../store";
import api from "../../api";
import { LoginRequest, LoginRespons } from "../../api/auth/types";
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
import { isTokenExpired } from "../../utils/jwt";
import { AxiosPromise } from "axios";

export const loginUser =
  (data: LoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);

      console.log(res);

      if (res.data.isNotValidData) {
        dispatch(loginNotValidData(true));
      } else {
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

let refreshTokenRequest: AxiosPromise<LoginRespons> | null = null;

export const getAccessToken =
  () =>
  async (dispatch: Dispatch): Promise<string | null> => {
    try {
      const accessToken = store.getState().auth.authData.accessToken;

      if (!accessToken || isTokenExpired(accessToken)) {
        if (refreshTokenRequest === null) {
          refreshTokenRequest = api.auth.refreshToken();
        }

        const res = await refreshTokenRequest;
        refreshTokenRequest = null;

        res && dispatch(loginSuccess(res.data.accessToken));

        return res?.data.accessToken;
      }
      return accessToken;
    } catch (err) {
      console.error(err);

      return null;
    }
  };
