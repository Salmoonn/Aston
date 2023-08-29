import "./Dropdown.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../../store";
import { createSrcAvatar } from "../../../../utils/createSrc";
import { useState } from "react";
import { logoutUser } from "../../../../store/auth/authAction";

import arrowRight from "../../../../images/arrowRight.svg";

const Dropdown = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profile = useSelector(
    (state: RootState) => state.auth.profileData.profile
  );

  const [isOpen, setIsOpen] = useState(false);

  const [isLoadedAvatar, setIsLoadedAvatar] = useState(false);
  const srcAvatar = createSrcAvatar(profile?.login);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClickProfile = (): void => {
    setIsOpen(false);
    navigate(`/${profile?.login}`);
  };

  const handleClickFavorites = (): void => {
    setIsOpen(false);
    navigate("/favorites");
  };

  const handleClickHistory = (): void => {
    setIsOpen(false);
    navigate("/history");
  };

  const handleLogout = (): void => {
    dispatch(logoutUser());
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button smart" onClick={handleClick}>
        <img
          src={srcAvatar}
          alt="avatar"
          className="dropdown-avatar"
          style={{ display: isLoadedAvatar ? "inherit" : "none" }}
          onLoad={() => setIsLoadedAvatar(true)}
        />
        <div className="dropdown-login space-mono">{profile?.name}</div>
        <img
          src={arrowRight}
          alt="arrow"
          style={{ transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </button>
      <div
        className="dropdown-list work-sans column"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div className="dropdown-list-child" onClick={handleClickProfile}>
          Profile
        </div>
        <div className="dropdown-list-child" onClick={handleClickFavorites}>
          Favorites
        </div>
        <div className="dropdown-list-child" onClick={handleClickHistory}>
          History
        </div>
        <div className="dropdown-list-child" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
