import { api } from "..";
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
  }),
});
