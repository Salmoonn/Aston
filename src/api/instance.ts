import axios, { AxiosError } from "axios";
import api from ".";
import { store } from "../store";
import { logoutUser } from "../store/auth/authAction";
import { loginSuccess } from "../store/auth/authReducer";
import Endpoints from "./endpoints";

export const axiosInstance = axios.create({});

const urlSkipAuth = [
  Endpoints.SIGN_UP,
  Endpoints.AUTH.LOGIN,
  Endpoints.AUTH.REFRESH,
  Endpoints.AUTH.LOGOUT,
];

axiosInstance.interceptors.request.use(async (config) => {
  if (config.url && urlSkipAuth.includes(config.url)) {
    return config;
  }

  const accessToken = store.getState().auth.authData.accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const isLoggedIn = !!store.getState().auth.authData.accessToken;

    if (
      error.response?.status === 401 &&
      isLoggedIn &&
      error.request.url !== Endpoints.AUTH.LOGOUT
    ) {
      store.dispatch(logoutUser());
    }
  }
);

axiosInstance.interceptors.response.use(async (response) => {
  if (response?.headers.istokenexpired === "true") {
    const res = await api.auth.refreshToken();

    res && store.dispatch(loginSuccess(res.data.accessToken));
  }
  return response;
});
