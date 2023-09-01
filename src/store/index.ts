import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./slices/authSlice";
import { authAPI } from "./api/slice/auth";
import { favoritesAPI } from "./api/slice/favorites";
import { historyAPI } from "./api/slice/history";
import { itemAPI } from "./api/slice/item";
import { profileAPI } from "./api/slice/profile";
import { searchAPI } from "./api/slice/search";
import { signupAPI } from "./api/slice/signup";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
    [itemAPI.reducerPath]: itemAPI.reducer,
    [searchAPI.reducerPath]: searchAPI.reducer,
    [historyAPI.reducerPath]: historyAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [favoritesAPI.reducerPath]: favoritesAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
    [signupAPI.reducerPath]: signupAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  // .concat(itemAPI.middleware)
  // .concat(searchAPI.middleware)
  // .concat(historyAPI.middleware)
  // .concat(authAPI.middleware)/
  // .concat(favoritesAPI.middleware)
  // .concat(profileAPI.middleware)
  // .concat(signupAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
