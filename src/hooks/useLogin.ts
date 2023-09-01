import { useEffect, useState } from "react";
import { authAPI } from "../store/api/auth";
import { useAppDispatch } from "../store";
import { setAccessToken } from "../store/slices/authSlice";
import { useDispatchProfile } from "./useDispatchProfile";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [isNotValidData, setIsNotValidData] = useState(false);
  const [postLogin, { data: loginData }] = authAPI.useLoginMutation();
  const dispatchProfile = useDispatchProfile();

  const tryLogin = (login: string, password: string): void => {
    postLogin({ login, password });
  };

  useEffect(() => {
    if (loginData?.accessToken) {
      dispatch(setAccessToken(loginData?.accessToken));
      dispatchProfile();
    }
    if (loginData?.isNotValidData) setIsNotValidData(true);
  }, [loginData]);

  return { isNotValidData, setIsNotValidData, tryLogin };
};
