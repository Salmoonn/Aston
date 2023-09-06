import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import Signup from "../../pages/Signup";

export const SignUpRoute = (): JSX.Element => {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  const profile = useGetProfile();

  useEffect(() => {
    if (isLoggedIn && profile) {
      navigate(`/${profile.login}`);
    }
  }, [isLoggedIn, navigate, profile]);

  return <Signup />;
};
