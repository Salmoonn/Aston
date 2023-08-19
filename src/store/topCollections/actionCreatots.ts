import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import {
  getTopCreatorsFailure,
  getTopCreatorsStart,
  getTopCreatorsSuccess,
} from "./topCollectionReducers";

export const getTopCreators =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getTopCreatorsStart());

      const res = await api.collection.getTopcollection();

      dispatch(getTopCreatorsSuccess(res.data));
    } catch (error: any) {
      console.error(error);

      dispatch(getTopCreatorsFailure(error.message));
    }
  };
