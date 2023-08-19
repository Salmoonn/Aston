import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { addCollection, removeCollection } from "./collectionsReducer";

export const getCollection = (data: string) => async (dispatch: Dispatch) => {
  try {
    const res = await api.collection.getCollection(data);
    dispatch(addCollection(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteCollection = (data: string) => (dispatch: Dispatch) => {
  try {
    dispatch(removeCollection(data));
  } catch (err) {
    console.error(err);
  }
};
