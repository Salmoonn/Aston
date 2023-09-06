import type { AnyAction, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { logout, setProfile } from "../slices/authSlice";

export const logger =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    if (action.type === setProfile.type) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          login: action.payload.login,
          roles: action.payload.roles,
        }),
      );
    }
    if (action.type === logout.type) {
      localStorage.removeItem("user");
    }
    return next(action);
  };
