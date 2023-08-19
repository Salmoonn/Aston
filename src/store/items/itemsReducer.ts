import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";

export interface Item {
  id: string;
  creator: string;
  name: string;
  price: number;
  highestBid: number;
  tags: string[] | null;
  collection: string | null;
}

export interface ItemState {
  data: Item;
  isLoading: boolean;
  error: null | string;
}

const initialState: ItemState[] = [];

export const itemsReducer = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItemStart(state, action: PayloadAction<string>) {},
    addItem(state, action: PayloadAction<Item>) {
      if (!state.find((e) => e.data.id === action.payload.id))
        state.push({
          data: action.payload,
          isLoading: false,
          error: null,
        });
    },
    removeItem(state, action: PayloadAction<string>) {
      state.filter((e) => e.data.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemsReducer.actions;

export default itemsReducer.reducer;
