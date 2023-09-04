import Endpoints from "../endpoints";
import {
  transformItem,
  transformItems,
} from "../../../utils/transformResponse";
import { Item } from "../../../types/Types";
import { api } from "..";

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
      transformResponse: (res) => (res ? transformItems(res) : null),
    }),
  }),
});
