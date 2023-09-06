import { useAppDispatch } from "../store";
import { setLoading } from "../store/slices/authSlice";
import { useRefreshProfile } from "./useRefreshProfile";
import { useRefreshToken } from "./useRefreshToken";

export const useRefresh = (): (() => Promise<void>) => {
  const dispatch = useAppDispatch();
  const refreshToken = useRefreshToken();
  const refreshProfile = useRefreshProfile();

  const refresh = async (): Promise<void> => {
    if (localStorage.getItem("refreshToken") === "isExist") {
      dispatch(setLoading(true));
      await refreshToken();
      await refreshProfile();
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  };

  return refresh;
};
