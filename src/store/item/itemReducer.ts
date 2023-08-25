import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types/Item";

export interface ItemState {
  data: Item | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: ItemState = {
  data: null,
  isLoading: false,
  error: null,
};

export const itemReducer = createSlice({
  name: "item",
  initialState,
  reducers: {
    itemStart(state) {
      state.isLoading = true;
    },
    itemSuccess(state, action: PayloadAction<Item>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    itemFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    itemToInitialState: () => initialState,
  },
});

export const { itemFailure, itemStart, itemSuccess, itemToInitialState } =
  itemReducer.actions;

export default itemReducer.reducer;
