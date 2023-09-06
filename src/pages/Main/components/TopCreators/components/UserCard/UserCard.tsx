import "./UserCard.css";
import { Link } from "react-router-dom";
import { createSrcAvatar } from "../../../../../../utils/createSrc";
import type { UserLite } from "../../../../../../types/Types";

interface Props {
  user: UserLite;
  number: number;
}

export const UserCard = ({ user, number }: Props): JSX.Element => {
  const { login, name, totalSale } = user;

  const srcAvatar = createSrcAvatar(login);

  return (
    <Link to={`/${login}`}>
      <div className="top-creators-user-card smart column">
        <div className="top-creators-user-card-header">
          <div className="top-creators-user-card-number">
            <p className="space-mono">{number}</p>
          </div>
          <img className="user-card-avatar" src={srcAvatar} alt="avatar" />
        </div>
        <div className="top-creators-user-card-info">
          <h5 className="work-sans">{name}</h5>
          <div className="top-creators-total-sale">
            <p className="work-sans" style={{ color: "#858585" }}>
              Total sale:
            </p>
            <p className="top-creators-EHT base-body-space">{totalSale} ETH</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
