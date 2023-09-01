import config from "../../config.json";

import Endpoints from "./endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { transformItem, transformItems } from "../../utils/transformResponse";
import { Item } from "../../types/Types";

export const itemAPI = createApi({
  reducerPath: "itemAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.server }),
  endpoints: (build) => ({
    getItem: build.query<Item, string>({
      query: (id) => ({
        url: Endpoints.ITEM.GET_ITEM,
        params: { id },
      }),
      transformResponse: transformItem,
    }),
    getMoreItems: build.query<Item[], string>({
      query: (id) => ({
        url: Endpoints.ITEM.GET_MORE_ITEMS,
        params: { id },
      }),
      transformResponse: transformItems,
    }),
  }),
});
