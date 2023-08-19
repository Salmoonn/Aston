import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Collection {
  id: string;
  name: string;
  creator: string;
  body: string[];
}

export interface CollectionState {
  data: Collection;
  isLoading: boolean;
  error: null | string;
}

const initialState: CollectionState[] = [];

export const collectionsReducer = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection(state, action: PayloadAction<Collection>) {
      if (!state.find((e) => e.data.id === action.payload.id))
        state.push({
          data: action.payload,
          isLoading: false,
          error: null,
        });
    },
    removeCollection(state, action: PayloadAction<string>) {
      state.filter((e) => e.data.id !== action.payload);
    },
  },
});

export const { addCollection, removeCollection } = collectionsReducer.actions;

export default collectionsReducer.reducer;
