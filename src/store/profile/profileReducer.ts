import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

export type TabBar = "created" | "owned" | "collection";

export interface ProfileState {
  data: User | null;
  isLoading: boolean;
  error: null | string;
  tabbar: TabBar;
}

const initialState: ProfileState = {
  data: null,
  isLoading: false,
  error: null,
  tabbar: "created",
};

export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileStart(state) {
      state.isLoading = true;
    },
    profileSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    profileFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    profileTabBar(state, action: PayloadAction<TabBar>) {
      state.tabbar = action.payload;
    },
    profileToInitialState: () => initialState,
  },
});

export const {
  profileFailure,
  profileStart,
  profileSuccess,
  profileTabBar,
  profileToInitialState,
} = profileReducer.actions;

export default profileReducer.reducer;
