import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginRequest } from "./types";

export const login = (params: ILoginRequest) =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);

export const getProfile = () => axiosInstance.get(Endpoints.AUTH.PROFILE);

export const logout = () => axiosInstance.get(Endpoints.AUTH.LOGOUT);

export const refreshToken = () => axiosInstance.get(Endpoints.AUTH.REFRESH);
