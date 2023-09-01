import config from "../../config.json";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Endpoints from "./endpoints";
import { User } from "../../types/Types";
import { transformUser } from "../../utils/transformResponse";

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => ({
        url: Endpoints.PROFILE.GET_PROFILE,
        params: { id },
      }),
      transformResponse: transformUser,
    }),
  }),
});
