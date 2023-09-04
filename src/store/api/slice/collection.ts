import { api } from "..";
import { Collection } from "../../../types/Types";
import { transformCollections } from "../../../utils/transformResponse";
import Endpoints from "../endpoints";

export const collectionAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getTopCollections: build.query<Collection[], void>({
      query: () => ({
        url: Endpoints.COLLECTION.TOP_COLLECTION,
      }),
      transformResponse: transformCollections,
    }),
  }),
});
