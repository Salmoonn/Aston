import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Size } from "../../App";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import { Search } from "./components/Search";
import { Dropdown } from "./components/Dropdown";
import logo from "../../images/logo.svg";
import logoName from "../../images/logoName.svg";
import burgerMenu from "../../images/burgerMenu.svg";
import user from "../../images/user2.svg";

export const Header = (): JSX.Element => {
  const size = useContext(Size);

  const IsLoggerIn = useIsLoggedIn();

  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <img src={logo} className="header-logo-img" alt="logo" />
          <img src={logoName} className="header-logo-text" alt="logoName" />
        </div>
      </Link>
      {size.isDesktop ? <Search /> : null}
      <div className="header-menu">
        <Link to="/marketplace" className="header-li only-desktop">
          <div className="header-li-button smart">
            <div className="work-sans">Marketplace</div>
          </div>
        </Link>
        <div className="header-li-topcreators only-desktop ">
          <div className="header-li-button smart">
            <div className="work-sans">Ranking</div>
          </div>
        </div>
        <div className="header-li-connect only-desktop ">
          <div className="header-li-button smart">
            <div className="work-sans">Connect a wallet</div>
          </div>
        </div>
        {IsLoggerIn ? (
          <Dropdown />
        ) : (
          <>
            <Link to="/login" className="only-desktop">
              <div className="header-login smart">
                <div className="button-text">Log In</div>
              </div>
            </Link>
            <Link to="/signup" className="only-desktop">
              <div className="header-sign-up smart">
                <div className="header-sign-up-inner">
                  <img src={user} alt="user" />
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
