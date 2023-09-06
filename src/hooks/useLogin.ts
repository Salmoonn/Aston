import { useEffect, useState } from "react";
import { authAPI } from "../store/api/slice/auth";
import { useAppDispatch } from "../store";
import { setAccessToken } from "../store/slices/authSlice";
import { useRefreshProfile } from "./useRefreshProfile";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [isNotValidData, setIsNotValidData] = useState(false);
  const [postLogin, { data: loginData }] = authAPI.useLoginMutation();
  const refreshProfile = useRefreshProfile();

  const tryLogin = (login: string, password: string): void => {
    postLogin({ login, password });
  };

  useEffect(() => {
    if (loginData?.accessToken) {
      localStorage.setItem("refreshToken", "isExist");
      dispatch(setAccessToken(loginData?.accessToken));
      refreshProfile();
    }
    if (loginData?.isNotValidData) {
      setIsNotValidData(true);
    }
  }, [dispatch, loginData, refreshProfile]);

  return { isNotValidData, setIsNotValidData, tryLogin };
};
