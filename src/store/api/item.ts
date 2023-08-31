import config from "../../config.json";

import Endpoints from "./endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ItemResponse } from "../../types/TypeResponse";

export const itemAPI = createApi({
  reducerPath: "itemAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
  endpoints: (build) => ({
    getItem: build.query<ItemResponse, string>({
      query: (id) => ({
        url: Endpoints.ITEM.GET_ITEM,
        params: { id },
      }),
    }),
    getMoreItems: build.query<ItemResponse[], string>({
      query: (id) => ({
        url: Endpoints.ITEM.GET_MORE_ITEMS,
        params: { id },
      }),
    }),
  }),
});
