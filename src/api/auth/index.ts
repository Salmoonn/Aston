import { AxiosPromise, AxiosResponse } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { LoginRequest, LoginRespons } from "./types";

export const login = (params: LoginRequest): AxiosPromise<LoginRespons> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);

export const getProfile = (): Promise<AxiosResponse> =>
  axiosInstance.get(Endpoints.AUTH.PROFILE);

export const logout = (): Promise<AxiosResponse> =>
  axiosInstance.get(Endpoints.AUTH.LOGOUT);

export const refreshToken = (): Promise<AxiosResponse> =>
  axiosInstance.get(Endpoints.AUTH.REFRESH);
