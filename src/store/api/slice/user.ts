import Endpoints from "../endpoints";
import type { User, UserLite } from "../../../types/Types";
import { transformUser } from "../../../utils/transformResponse";
import { api } from "..";

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => ({
        url: Endpoints.USER.GET_USER,
        params: { id },
      }),
      transformResponse: transformUser,
    }),
    getTopUser: build.query<UserLite[], void>({
      query: () => Endpoints.USER.GET_TOP_USERS,
    }),
  }),
});
