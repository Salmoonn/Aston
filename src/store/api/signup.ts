import config from "../../config.json";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Endpoints from "./endpoints";
import { SignUpRequest } from "../../types/TypeRequest";
import { SignupResponse } from "../../types/TypeResponse";

export const signupAPI = createApi({
  reducerPath: "signupAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
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
