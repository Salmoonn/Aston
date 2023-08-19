import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { addItem, removeItem } from "./itemsReducer";

export const getItem = (data: string) => async (dispatch: Dispatch) => {
  try {
    const res = await api.item.getItem(data);
    dispatch(addItem(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteItem = (data: string) => (dispatch: Dispatch) => {
  try {
    dispatch(removeItem(data));
  } catch (err) {
    console.error(err);
  }
};
