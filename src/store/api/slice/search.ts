import Endpoints from "../endpoints";
import { Collection, Item } from "../../../types/Types";
import {
  transformCollections,
  transformItems,
} from "../../../utils/transformResponse";
import { api } from "..";
import { CollectionResponse, ItemResponse } from "../../../types/TypeResponse";

export const searchAPI = api.injectEndpoints({
  endpoints: (build) => ({
    searchItem: build.query<Item[] | null, string>({
      query: (search) => ({
        url: Endpoints.SEARCH.SEARCH_ITEM,
        params: { search },
      }),
      transformResponse: (res: ItemResponse[] | null) =>
        res ? transformItems(res) : res,
    }),
    searchCollection: build.query<Collection[] | null, string>({
      query: (search) => ({
        url: Endpoints.SEARCH.SEARCH_COLLECTION,
        params: { search },
      }),
      transformResponse: (res: CollectionResponse[] | null) =>
        res ? transformCollections(res) : res,
    }),
  }),
});
