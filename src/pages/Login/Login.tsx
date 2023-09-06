import "./Login.css";
import image from "../../images/login.png";
import user from "../../images/user.svg";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import { useGetProfile } from "../../hooks/useGetProfile";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useIsLoggedIn();
  const profile = useGetProfile();

  const { isNotValidData, setIsNotValidData, tryLogin } = useLogin();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    tryLogin(login, password);
  };

  const onSubmitLogin = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
    setIsNotValidData(false);
  };
  const onSubmitPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setIsNotValidData(false);
  };

  useEffect(() => {
    if (isLoggedIn && profile) {
      navigate(`/${profile.login}`);
    }
  }, [isLoggedIn, navigate, profile]);

  return (
    <div className="login">
      <div className="login-body column">
        <div className="login-title h2 work-sans">Log In</div>
        <form onSubmit={handleSubmit} className="login-form column">
          <div className="login-form-body column">
            <div className="login-form-input">
              <img src={user} alt="user" />
              <input
                data-error={isNotValidData}
                type="text"
                name="login"
                value={login}
                onChange={onSubmitLogin}
                placeholder="Username"
                required
              />
            </div>
            <div className="login-form-input">
              <img src={user} alt="user" />
              <input
                data-error={isNotValidData}
                type="password"
                name="password"
                value={password}
                onChange={onSubmitPassword}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <button type="submit" className="login-submit work-sans smart">
            Log In
          </button>
        </form>
      </div>
      <div className="login-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
