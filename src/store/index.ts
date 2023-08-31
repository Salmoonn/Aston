import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./slices/authSlice";
import { authAPI } from "./api/auth";
import { favoritesAPI } from "./api/favorites";
import { historyAPI } from "./api/history";
import { itemAPI } from "./api/item";
import { profileAPI } from "./api/profile";
import { searchAPI } from "./api/search";
import { signupAPI } from "./api/signup";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [itemAPI.reducerPath]: itemAPI.reducer,
    [searchAPI.reducerPath]: searchAPI.reducer,
    [historyAPI.reducerPath]: historyAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [favoritesAPI.reducerPath]: favoritesAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
    [signupAPI.reducerPath]: signupAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(itemAPI.middleware)
      .concat(searchAPI.middleware)
      .concat(historyAPI.middleware)
      .concat(authAPI.middleware)
      .concat(favoritesAPI.middleware)
      .concat(profileAPI.middleware)
      .concat(signupAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
