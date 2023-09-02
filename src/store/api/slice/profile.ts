import Endpoints from "../endpoints";
import { User } from "../../../types/Types";
import { transformUser } from "../../../utils/transformResponse";
import { api } from "..";

export const profileAPI = api.injectEndpoints({
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
