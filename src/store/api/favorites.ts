import Endpoints from "./endpoints";

import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQueryWithReauth } from "./interceptors";
import { ToggleFavoritesResponse } from "../../types/TypeResponse";
import { transformItems } from "../../utils/transformResponse";
import { Item } from "../../types/Types";

export const favoritesAPI = createApi({
  reducerPath: "favoritesAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["favorites"],
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
