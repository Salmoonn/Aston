import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginRequest } from "../../types/TypeRequest";
import {
  LoginResponse,
  ProfileResponse,
  RefreshTokenResponse,
} from "../../types/TypeResponse";
import Endpoints from "./endpoints";
import { baseQueryWithReauth } from "./interceptors";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: Endpoints.AUTH.LOGIN,
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
    getProfile: build.mutation<ProfileResponse, null>({
      query: () => ({
        url: Endpoints.AUTH.PROFILE,
        method: "GET",
        credentials: "include",
      }),
    }),
    refreshToken: build.mutation<RefreshTokenResponse, null>({
      query: () => ({
        url: Endpoints.AUTH.REFRESH,
        method: "GET",
        credentials: "include",
      }),
    }),
    logout: build.mutation({
      query: () => Endpoints.AUTH.LOGOUT,
    }),
  }),
});
