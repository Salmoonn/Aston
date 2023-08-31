import config from "../../config.json";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Endpoints from "./endpoints";
import { Collection, Item } from "../../types/Types";

export const searchAPI = createApi({
  reducerPath: "searchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
  endpoints: (build) => ({
    searchItem: build.query<Item[] | null, string>({
      query: (search) => ({
        url: Endpoints.SEARCH.SEARCH_ITEM,
        params: { search },
      }),
    }),
    searchCollection: build.query<Collection[] | null, string>({
      query: (search) => ({
        url: Endpoints.SEARCH.SEARCH_COLLECTION,
        params: { search },
      }),
    }),
  }),
});
