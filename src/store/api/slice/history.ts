import { api } from "..";
import type { Profile } from "../../../types/Types";
import Endpoints from "../endpoints";

export const historyAPI = api.injectEndpoints({
  endpoints: (build) => ({
    postHistory: build.mutation<void, string>({
      query: (search) => ({
        url: Endpoints.HISTORY.POST_HISTORY,
        method: "POST",
        body: { search },
      }),
    }),
    deleteHistory: build.mutation<Profile, void>({
      query: () => ({
        url: Endpoints.HISTORY.DELETE_HISTORY,
        method: "DELETE",
      }),
    }),
  }),
});
