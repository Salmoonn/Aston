import { api } from "..";
import { PostHistoryResponse } from "../../../types/TypeResponse";
import Endpoints from "../endpoints";

export const historyAPI = api.injectEndpoints({
  endpoints: (build) => ({
    postHistory: build.mutation<PostHistoryResponse, string>({
      query: (search) => ({
        url: Endpoints.HISTORY.POST_HISTORY,
        method: "POST",
        body: { search },
      }),
    }),
  }),
});
