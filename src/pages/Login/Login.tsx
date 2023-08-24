import "./Login.css";

import image from "../../images/login.png";
import user from "../../images/user.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/authAction";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginNotValidData } from "../../store/auth/authReducer";

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const isNotValidData = useSelector(
    (state: RootState) => state.auth.authData.isNotValidData
  );

  const profile = useSelector(
    (state: RootState) => state.auth.profileData.profile
  );

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  const onSubmitLogin = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
    dispatch(loginNotValidData(false));
  };
  const onSubmitPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    dispatch(loginNotValidData(false));
  };

  if (profile) {
    return <Navigate to={`/${profile.name}`} />;
  }

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

export default Login;