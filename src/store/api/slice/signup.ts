import Endpoints from "../endpoints";
import { SignUpRequest } from "../../../types/TypeRequest";
import { SignupResponse } from "../../../types/TypeResponse";
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
