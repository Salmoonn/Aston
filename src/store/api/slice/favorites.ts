import Endpoints from "../endpoints";

import { ToggleFavoritesResponse } from "../../../types/TypeResponse";
import { transformItems } from "../../../utils/transformResponse";
import { Item } from "../../../types/Types";
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
    toggleFavorites: build.mutation<ToggleFavoritesResponse, string>({
      query: (itemId) => ({
        url: Endpoints.FAVORITES.TOGGLE_FAVORITES,
        method: "POST",
        body: { itemId },
        credentials: "include",
      }),
      invalidatesTags: ["favorites"],
    }),
  }),
});
