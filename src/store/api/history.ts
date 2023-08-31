import { createApi } from "@reduxjs/toolkit/query/react";
import { PostHistoryResponse } from "../../types/TypeResponse";
import Endpoints from "./endpoints";
import { baseQueryWithReauth } from "./interceptors";

export const historyAPI = createApi({
  reducerPath: "historyAPI",
  baseQuery: baseQueryWithReauth,
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
