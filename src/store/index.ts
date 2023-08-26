import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/authReducer";
import itemReducer from "./item/itemReducer";
import profileReducer from "./profile/profileReducer";
import signupReducer from "./signup/signupReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    item: itemReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
