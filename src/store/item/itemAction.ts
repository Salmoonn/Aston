import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import {
  itemFailure,
  itemStart,
  itemSuccess,
  itemToInitialState,
} from "./itemReducer";

export const loadingItem =
  (data: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(itemStart());

      const response = await api.item.getItem(data);

      response
        ? dispatch(itemSuccess(response.data))
        : dispatch(itemToInitialState());
    } catch (err: any) {
      console.error(err);
      dispatch(itemFailure(err.message));
    }
  };
