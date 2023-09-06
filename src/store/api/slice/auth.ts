import type { LoginRequest } from "../../../types/TypeRequest";
import type {
  LoginResponse,
  RefreshTokenResponse,
} from "../../../types/TypeResponse";
import type { Profile } from "../../../types/Types";
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
    refreshProfile: build.mutation<Profile, void>({
      query: () => ({
        url: Endpoints.AUTH.PROFILE,
        credentials: "include",
      }),
      transformResponse: transformProfile,
    }),
    refreshToken: build.mutation<RefreshTokenResponse, void>({
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
