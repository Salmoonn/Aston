import { LoginRequest } from "../../../types/TypeRequest";
import {
  LoginResponse,
  ProfileResponse,
  RefreshTokenResponse,
} from "../../../types/TypeResponse";
import { Profile } from "../../../types/Types";
import { transformProfile } from "../../../utils/transformResponse";
import { api } from "..";
import Endpoints from "../endpoints";

export const authAPI = api.injectEndpoints({
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
      transformResponse: (res: ProfileResponse) => transformProfile(res),
    }),
    refreshToken: build.query<RefreshTokenResponse, void>({
      query: () => ({
        url: Endpoints.AUTH.REFRESH,
        credentials: "include",
      }),
    }),
    logout: build.mutation<null, void>({
      query: () => Endpoints.AUTH.LOGOUT,
    }),
  }),
});
