import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/auth";
import { setAccessToken } from "../store/slices/authSlice";
import { useDispatchProfile } from "./useDispatchProfile";

export const useRefresh = () => {
  const dispatch = useAppDispatch();
  const dispatchProfile = useDispatchProfile();
  const { data, refetch } = authAPI.useRefreshTokenQuery();

  useEffect(() => {
    if (data) {
      dispatch(setAccessToken(data.accessToken));
      dispatchProfile();
    }
  }, [data]);

  return refetch;
};
