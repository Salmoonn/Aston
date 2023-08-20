import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { LoginRequest } from "./types";

export const login = (params: LoginRequest) =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);

export const getProfile = () => axiosInstance.get(Endpoints.AUTH.PROFILE);

export const logout = () => axiosInstance.get(Endpoints.AUTH.LOGOUT);

export const refreshToken = () => axiosInstance.get(Endpoints.AUTH.REFRESH);
