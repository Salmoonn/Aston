import config from "../../config.json";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Endpoints from "./endpoints";
import { Collection, Item } from "../../types/Types";
import {
  transformCollections,
  transformItems,
} from "../../utils/transformResponse";

export const searchAPI = createApi({
  reducerPath: "searchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
  endpoints: (build) => ({
    searchItem: build.query<Item[] | null, string>({
      query: (search) => ({
        url: Endpoints.SEARCH.SEARCH_ITEM,
        params: { search },
      }),
      transformResponse: transformItems,
    }),
    searchCollection: build.query<Collection[] | null, string>({
      query: (search) => ({
        url: Endpoints.SEARCH.SEARCH_COLLECTION,
        params: { search },
      }),
      transformResponse: transformCollections,
    }),
  }),
});
