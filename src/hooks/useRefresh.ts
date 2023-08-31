import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/auth";
import { setAccessToken, setProfile } from "../store/slices/authSlice";

export const useRefresh = () => {
  const dispatch = useAppDispatch();
  const [refreshToken] = authAPI.useRefreshTokenMutation();
  const [getProfile] = authAPI.useGetProfileMutation();

  const refresh = async (): Promise<void> => {
    try {
      const accessToken = (await refreshToken(null).unwrap())?.accessToken;
      if (accessToken) dispatch(setAccessToken(accessToken));
      const profile = await getProfile(null).unwrap();
      if (profile) dispatch(setProfile(profile));
    } catch {}
  };

  return refresh;
};
