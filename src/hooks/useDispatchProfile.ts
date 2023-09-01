import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/auth";
import { setProfile } from "../store/slices/authSlice";

export const useDispatchProfile = (): (() => void) => {
  const dispatch = useAppDispatch();
  const { data, refetch } = authAPI.useGetProfileQuery();

  useEffect(() => {
    if (data) dispatch(setProfile(data));
  }, [data]);

  return refetch;
};
