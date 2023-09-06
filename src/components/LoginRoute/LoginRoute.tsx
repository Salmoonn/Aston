import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import Login from "../../pages/Login";

export const LoginRoute = (): JSX.Element | null => {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  const profile = useGetProfile();

  useEffect(() => {
    if (isLoggedIn && profile) {
      navigate(`/${profile.login}`);
    }
  }, [isLoggedIn, navigate, profile]);
  return <Login />;
};
