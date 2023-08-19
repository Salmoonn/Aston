import "./SubForm.css";
import image from "../../images/post.svg";

const SubForm = () => {
  return (
    <div className="subForm">
      <input
        className="subInput base-body-work"
        type="email"
        name="email"
        placeholder="Enter your email here"
      />
      <button className="subBut smart">
        <img src={image} />
        <div className="work-sans">Subscribe</div>
      </button>
    </div>
  );
};

export default SubForm;
