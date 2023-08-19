import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/authReducer";
import profileReducer from "./profile/profileReducer";
import signUpReducer from "./signUp/signUpReducer";
import collectionReducers from "./topCollections/topCollectionReducers";
import itemsReducer from "./items/itemsReducer";
import collectionsReducer from "./collections/collectionsReducer";

export const store = configureStore({
  reducer: {
    topCollections: collectionReducers,
    signUp: signUpReducer,
    auth: authReducer,
    profile: profileReducer,
    items: itemsReducer,
    collections: collectionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
