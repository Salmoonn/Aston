import Endpoints from "../endpoints";
import {
  transformItem,
  transformItems,
} from "../../../utils/transformResponse";
import type { Item } from "../../../types/Types";
import { api } from "..";
import type { ItemResponse } from "../../../types/TypeResponse";

export const itemAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query<Item, string>({
      query: (id) => ({
        url: Endpoints.ITEM.GET_ITEM,
        params: { id },
      }),
      transformResponse: transformItem,
    }),
    getMoreItems: build.query<Item[] | null, string>({
      query: (id) => ({
        url: Endpoints.ITEM.GET_MORE_ITEMS,
        params: { id },
      }),
      transformResponse: (res: ItemResponse[] | null) =>
        res ? transformItems(res) : null,
    }),
  }),
});
