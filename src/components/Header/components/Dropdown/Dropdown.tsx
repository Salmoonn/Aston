import "./Dropdown.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../store";
import { createSrcAvatar } from "../../../../utils/createSrc";
import { useState } from "react";
import { useLogout } from "../../../../hooks/useLogout";

import arrowRight from "../../../../images/arrowRight.svg";

const Dropdown = (): JSX.Element => {
  const navigate = useNavigate();
  const logout = useLogout();

  const profile = useSelector((state: RootState) => state.auth.profile);

  const [isOpen, setIsOpen] = useState(false);

  const [isLoadedAvatar, setIsLoadedAvatar] = useState(false);
  const srcAvatar = createSrcAvatar(profile?.login);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClickList = (src: string): void => {
    setIsOpen(false);
    navigate(`/${src}`);
  };

  const handleLogout = (): void => {
    setIsOpen(false);
    logout();
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
        <div
          className="dropdown-list-child"
          onClick={() => handleClickList(profile?.login || "")}
        >
          Profile
        </div>
        <div
          className="dropdown-list-child"
          onClick={() => handleClickList("favorites")}
        >
          Favorites
        </div>
        <div
          className="dropdown-list-child"
          onClick={() => handleClickList("history")}
        >
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
