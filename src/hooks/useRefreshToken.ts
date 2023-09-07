import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/slice/auth";
import { setAccessToken } from "../store/slices/authSlice";

export const useRefreshToken = (): (() => Promise<void>) => {
  const dispatch = useAppDispatch();
  const [refreshToken] = authAPI.useRefreshTokenMutation();

  const refresh = async (): Promise<void> => {
    try {
      const response = await refreshToken().unwrap();
      dispatch(setAccessToken(response.accessToken));
    } catch {
      console.error("refresh token");
    }
  };

  return refresh;
};
