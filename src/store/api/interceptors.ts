import config from "../../config.json";

import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import Endpoints from "./endpoints";
import { RootState } from "..";
import { setAccessToken, setInitialState } from "../slices/authSlice";

const baseQuery: BaseQueryFn<string | FetchArgs, any, FetchBaseQueryError> =
  fetchBaseQuery({
    baseUrl: config.server,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    result?.error &&
    "originalStatus" in result.error &&
    result.error.originalStatus === 401
  ) {
    const refreshResult = await baseQuery(
      Endpoints.AUTH.REFRESH,
      api,
      extraOptions
    );

    if (refreshResult?.data?.accessToken) {
      api.dispatch(setAccessToken(refreshResult.data.accessToken));

      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery(Endpoints.AUTH.LOGOUT, api, extraOptions);
      api.dispatch(setInitialState());
    }
  }
  return result;
};
