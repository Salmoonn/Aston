import "./Button.css";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import eye from "../../images/eye.svg";
import rocketLaunch from "../../images/rocketLaunch.svg";
import arrowRight from "../../images/arrowRight.svg";

interface Props {
  src: string;
  text?: string;
  visible?: "not-mobile" | "only-mobile";
  svg?: "eye" | "rocketLaunch" | "arrowRight";
}

export const Button = ({ src, text, visible, svg }: Props): JSX.Element => {
  let imgSvg;

  switch (svg) {
    case "rocketLaunch":
      imgSvg = rocketLaunch;
      break;
    case "arrowRight":
      imgSvg = arrowRight;
      break;
    default:
      imgSvg = eye;
  }

  return (
    <Link to={"/" + src} className={visible}>
      <div className="button smart">
        <img src={imgSvg} alt="svg" />
        <div className="work-sans">{text}</div>
      </div>
    </Link>
  );
};

Button.prototype = {
  src: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.string,
  svg: PropTypes.string,
};
