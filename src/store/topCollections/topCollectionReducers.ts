import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

export interface IImage {
  id: string;
  creator: string;
  name: string;
  price: number;
  highestBid: number;
  tags: Array<string>;
  collection: string;
  src?: string;
}

export interface ICollection {
  id: string;
  name: string;
  creator: string;
  images: Array<IImage>;
}

export interface TopCollectionState {
  collections: Array<ICollection> | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: TopCollectionState = {
  collections: null,
  isLoading: false,
  error: null,
};

export const topCollectionReducer = createSlice({
  name: "topCollection",
  initialState,
  reducers: {
    getTopCreatorsStart: (state): TopCollectionState => ({
      ...state,
      isLoading: true,
    }),
    getTopCreatorsSuccess: (state, action): TopCollectionState => ({
      ...state,
      collections: action.payload,
      isLoading: false,
      error: null,
    }),
    getTopCreatorsFailure: (state, actions): TopCollectionState => ({
      ...state,
      isLoading: false,
      error: actions.payload,
    }),
  },
});

export const {
  getTopCreatorsStart,
  getTopCreatorsSuccess,
  getTopCreatorsFailure,
} = topCollectionReducer.actions;

export default topCollectionReducer.reducer;
