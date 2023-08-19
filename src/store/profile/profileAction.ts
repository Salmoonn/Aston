import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { profileFailure, profileStart, profileSuccess } from "./profileReducer";

export const getProfile = (data: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(profileStart());

    const response = await api.profile.getProfile(data);

    dispatch(profileSuccess(response ? response.data : null));
  } catch (err: any) {
    console.error(err);

    dispatch(profileFailure(err.message));
  }
};
