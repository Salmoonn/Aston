import { useEffect, useState } from "react";
import { authAPI } from "../store/api/auth";
import { useAppDispatch } from "../store";
import { setAccessToken, setProfile } from "../store/slices/authSlice";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [isNotValidData, setIsNotValidData] = useState(false);
  const [postLogin, { data: loginData }] = authAPI.useLoginMutation();
  const [getProfile, { data: profileData }] = authAPI.useGetProfileMutation();

  const tryLogin = (login: string, password: string): void => {
    postLogin({ login, password });
  };

  useEffect(() => {
    if (loginData?.accessToken) {
      dispatch(setAccessToken(loginData?.accessToken));
      getProfile(null);
    }
    if (loginData?.isNotValidData) setIsNotValidData(true);
  }, [loginData]);

  useEffect(() => {
    if (profileData) {
      dispatch(setProfile(profileData));
    }
  }, [profileData]);

  return { isNotValidData, setIsNotValidData, tryLogin };
};
