import Endpoints from "../endpoints";
import type { SignUpRequest } from "../../../types/TypeRequest";
import type { SignupResponse } from "../../../types/TypeResponse";
import { api } from "..";

export const signupAPI = api.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<SignupResponse, SignUpRequest>({
      query: (body) => ({
        url: Endpoints.AUTH.SIGNUP,
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
  }),
});
