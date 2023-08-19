import "./LogIn.css";

import image from "../../images/login.png";
import user from "../../images/user.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/authAction";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginNotValidData } from "../../store/auth/authReducer";

const LogIn = () => {
  const dispatch = useAppDispatch();

  const isNotValidData = useSelector(
    (state: RootState) => state.auth.authData.isNotValidData
  );

  const profileUserName = useSelector(
    (state: RootState) => state.auth.profileData.profile?.name
  );

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ login, password }));
  };

  const onSubmitLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    dispatch(loginNotValidData(false));
  };
  const onSubmitPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    dispatch(loginNotValidData(false));
  };

  return profileUserName ? (
    <Navigate to={`/${profileUserName}`} />
  ) : (
    <div className="login">
      <div className="login-body column">
        <div className="login-title h2 work-sans">Log In</div>
        <form onSubmit={handleSubmit} className="login-form column">
          <div className="login-form-body column">
            <div className="login-form-input">
              <img src={user} />
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
              <img src={user} />
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

export default LogIn;
