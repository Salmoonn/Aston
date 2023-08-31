import config from "../../config.json";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Endpoints from "./endpoints";
import { Profile } from "../../types/Types";

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
  endpoints: (build) => ({
    getProfile: build.query<Profile, string>({
      query: (id) => ({
        url: Endpoints.PROFILE.GET_PROFILE,
        params: { id },
      }),
    }),
  }),
});
