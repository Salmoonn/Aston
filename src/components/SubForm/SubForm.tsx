import "./SubForm.css";

import image from "../../images/post.svg";

export const SubForm = (): JSX.Element => {
  return (
    <div className="subForm">
      <input
        className="subInput base-body-work"
        type="email"
        name="email"
        placeholder="Enter your email here"
      />
      <button className="subBut smart">
        <img src={image} alt="post" />
        <div className="work-sans">Subscribe</div>
      </button>
    </div>
  );
};
