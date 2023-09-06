import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/slice/auth";
import { setProfile } from "../store/slices/authSlice";

export const useRefreshProfile = (): (() => Promise<void>) => {
  const dispatch = useAppDispatch();
  const [refreshProfile] = authAPI.useRefreshProfileMutation();

  const refresh = async (): Promise<void> => {
    try {
      const response = await refreshProfile().unwrap();
      dispatch(setProfile(response));
    } catch {
      console.error("refresh profile");
    }
  };

  return refresh;
};
