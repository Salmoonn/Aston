import type { AnyAction, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { setInitialState, setProfile } from "../slices/authSlice";

export const logger =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    if (action.type === setProfile.type) {
      localStorage.setItem(
        "User",
        JSON.stringify({
          login: action.payload.login,
          roles: action.payload.roles,
        }),
      );
    }
    if (action.type === setInitialState.type) {
      localStorage.clear();
    }
    return next(action);
  };
