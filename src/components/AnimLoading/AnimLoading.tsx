import "./AnimLoading.css";
import logo from "../../images/logo.svg";
import logoName from "../../images/logoName.svg";

export const AnimLoading = (): JSX.Element => {
  return (
    <div className="anim-loading-wrapper">
      <div className="anim-loading">
        <img src={logo} alt="logo" />
        <img src={logoName} alt="logo name" />
      </div>
    </div>
  );
};
