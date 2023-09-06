import Endpoints from "../endpoints";

import {
  transformItems,
  transformProfile,
} from "../../../utils/transformResponse";
import type { Item, Profile } from "../../../types/Types";
import { api } from "..";

export const favoritesAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getFavorites: build.query<Item[], void>({
      query: () => ({
        url: Endpoints.FAVORITES.GET_FAVORITES,
        credentials: "include",
      }),
      providesTags: ["favorites"],
      transformResponse: transformItems,
    }),
    toggleFavorites: build.mutation<Profile, string>({
      query: (itemId) => ({
        url: Endpoints.FAVORITES.TOGGLE_FAVORITES,
        method: "POST",
        body: { itemId },
        credentials: "include",
      }),
      transformResponse: transformProfile,
      invalidatesTags: ["favorites"],
    }),
  }),
});
