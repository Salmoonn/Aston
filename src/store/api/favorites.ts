import Endpoints from "./endpoints";

import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQueryWithReauth } from "./interceptors";
import {
  ItemResponse,
  ToggleFavoritesResponse,
} from "../../types/TypeResponse";

export const favoritesAPI = createApi({
  reducerPath: "favoritesAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["favorites"],
  endpoints: (build) => ({
    getFavorites: build.query<ItemResponse[], null>({
      query: () => ({
        url: Endpoints.FAVORITES.GET_FAVORITES,
        credentials: "include",
      }),
      providesTags: ["favorites"],
    }),
    toggleFavorites: build.mutation<ToggleFavoritesResponse, string>({
      query: (itemId) => ({
        url: Endpoints.FAVORITES.TOGGLE_FAVORITES,
        method: "POST",
        body: { itemId },
        credentials: "include",
      }),
      invalidatesTags: () => ["favorites"],
    }),
  }),
});
