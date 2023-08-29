import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import logoName from "../../images/logoName.svg";
import burgerMenu from "../../images/burgerMenu.svg";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { logoutUser } from "../../store/auth/authAction";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const IsLoggerIn = useSelector(
    (state: RootState) => !!state.auth.authData.accessToken
  );

  const handleLogout = (): void => {
    dispatch(logoutUser());
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <img src={logo} className="header-logo-img" alt="logo" />
          <img src={logoName} className="header-logo-text" alt="logoName" />
        </div>
      </Link>
      <Search />
      <div className="header-menu">
        <Link to="/marketplace" className="header-li only-desktop">
          <div className="header-li-button smart">
            <div className="work-sans">Marketplace</div>
          </div>
        </Link>
        <Link to="/topcreators" className="header-li only-desktop">
          <div className="header-li-button smart">
            <div className="work-sans">Topcreators</div>
          </div>
        </Link>
        <Link to="/" className="header-li only-desktop">
          <div className="header-li-button smart">
            <div className="work-sans">Connect a wallet</div>
          </div>
        </Link>
        {IsLoggerIn ? (
          <Dropdown />
        ) : (
          // <Link onClick={handleLogout} to="/">
          //   <div className="header-logout smart">
          //     <div className="header-sign-up-inner">
          //       <img
          //         src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/user-1@2x.svg"
          //         alt=""
          //       />
          //       <div className="button-text">Log Out</div>
          //     </div>
          //   </div>
          // </Link>
          <>
            <Link to="/login" className="only-desktop">
              <div className="header-login smart">
                <div className="button-text">Log In</div>
              </div>
            </Link>
            <Link to="/signup" className="only-desktop">
              <div className="header-sign-up smart">
                <div className="header-sign-up-inner">
                  <img
                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/user-1@2x.svg"
                    alt=""
                  />
                  <div className="button-text">Sign Up</div>
                </div>
              </div>
            </Link>
          </>
        )}
        <Link to="/" className="not-desktop">
          <img src={burgerMenu} alt="burgerMenu" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
