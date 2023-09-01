import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginRequest } from "../../types/TypeRequest";
import { LoginResponse, RefreshTokenResponse } from "../../types/TypeResponse";
import { Profile } from "../../types/Types";
import { transformProfile } from "../../utils/transformResponse";
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
    getProfile: build.query<Profile, void>({
      query: () => ({
        url: Endpoints.AUTH.PROFILE,
        credentials: "include",
      }),
      transformResponse: (res) => transformProfile(res),
    }),
    refreshToken: build.query<RefreshTokenResponse, void>({
      query: () => ({
        url: Endpoints.AUTH.REFRESH,
        credentials: "include",
      }),
    }),
    logout: build.mutation({
      query: () => Endpoints.AUTH.LOGOUT,
    }),
  }),
});
