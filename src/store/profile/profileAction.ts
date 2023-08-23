import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import {
  profileFailure,
  profileStart,
  profileSuccess,
  profileToInitialState,
  // profileToInitialState,
} from "./profileReducer";

export const getProfile =
  (data: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(profileStart());

      const response = await api.profile.getProfile(data);

      response
        ? dispatch(profileSuccess(response.data))
        : dispatch(profileToInitialState());
    } catch (err: any) {
      console.error(err);

      dispatch(profileFailure(err.message));
    }
  };
