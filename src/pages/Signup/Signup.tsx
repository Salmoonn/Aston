import "./SignUp.css";

import image from "../../images/signup.png";
import user from "../../images/user.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { SignupUser } from "../../store/signup/signupAction";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  signUpNotValidEmail,
  signUpNotValidLogin,
} from "../../store/signup/signupReducer";

const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: RootState) => state.auth.profileData.profile
  );
  const isLoading = useSelector((state: RootState) => state.signup.isLoading);
  const isNotValidLogin = useSelector(
    (state: RootState) => state.signup.isNotValidLogin
  );
  const isNotValidEmail = useSelector(
    (state: RootState) => state.signup.isNotValidEmail
  );

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNotValidPassword, setIsNotValidPassword] = useState(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (password !== confirmPassword || password.length < 8) {
      setIsNotValidPassword(true);
    } else if (!isLoading) {
      dispatch(SignupUser({ login, email, password }));
    }
  };

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value);
    dispatch(signUpNotValidLogin(false));
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    dispatch(signUpNotValidEmail(false));
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setIsNotValidPassword(false);
  };
  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(e.target.value);
    setIsNotValidPassword(false);
  };

  if (profile) {
    return <Navigate to={`/${profile.name}`} />;
  }

  return (
    <div className="signup">
      <div className="signup-image">
        <img src={image} alt="signup background" />
      </div>
      <div className="signup-body column">
        <div className="signup-title work-sans column">
          <div className="signup-headline h2">Create Account</div>
          <div className="signup-subhead body-work">
            Welcome! Enter Your Details And Start Creating, Collection And
            Selling NFTs
          </div>
        </div>
        <form onSubmit={handleSubmit} className="signup-form column">
          <div className="signup-form-body column">
            <div className="signup-form-input">
              <img src={user} alt="user" />
              <input
                data-error={isNotValidLogin}
                type="text"
                name="login"
                value={login}
                onChange={onChangeLogin}
                placeholder="Username"
                required
              />
            </div>
            <div className="signup-form-input">
              <img src={user} alt="user" />
              <input
                data-error={isNotValidEmail}
                type="email"
                name="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="Email Addres"
                required
              />
            </div>
            <div className="signup-form-input">
              <img src={user} alt="user" />
              <input
                data-error={isNotValidPassword}
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
                required
              />
            </div>
            <div className="signup-form-input">
              <img src={user} alt="user" />
              <input
                data-error={isNotValidPassword}
                type="password"
                name="password"
                value={confirmPassword}
                onChange={onChangePasswordConfirm}
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <button
            style={isLoading ? { cursor: "not-allowed" } : {}}
            className={"signup-submit work-sans " + (isLoading ? "" : "smart")}
            type="submit"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
