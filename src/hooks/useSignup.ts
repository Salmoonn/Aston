import { useEffect, useState } from "react";
import { useAppDispatch } from "../store";
import { signupAPI } from "../store/api/slice/signup";
import { setAccessToken } from "../store/slices/authSlice";
import { useRefreshProfile } from "./useRefreshProfile";

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const refreshProfile = useRefreshProfile();
  const [isNotValidLogin, setIsNotValidLogin] = useState(false);
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);

  const handleLogin = {
    isValid: !isNotValidLogin,
    reset: (): void => setIsNotValidLogin(false),
  };

  const handleEmail = {
    isValid: !isNotValidEmail,
    reset: (): void => setIsNotValidEmail(false),
  };

  const [signup, { data, isLoading }] = signupAPI.useSignupMutation();

  useEffect(() => {
    if (data?.isNotValidLogin) {
      setIsNotValidLogin(true);
    }
    if (data?.isNotValidEmail) {
      setIsNotValidEmail(true);
    }
    if (data?.accessToken) {
      dispatch(setAccessToken(data.accessToken));
      refreshProfile();
    }
  }, [data]);

  const trySignup = (login: string, email: string, password: string): void => {
    signup({ login, email, password });
  };

  return { trySignup, isLoading, handleLogin, handleEmail };
};
