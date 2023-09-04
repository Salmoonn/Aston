import "./TopCreators.css";

import { userAPI } from "../../../../store/api/slice/user";
import Button1 from "../../../../components/Button";
import { UserCard } from "./components/UserCard";

export const TopCreators = (): JSX.Element => {
  const { data: topUsers } = userAPI.useGetTopUserQuery();

  const getButton = (visible: "not-mobile" | "only-mobile"): JSX.Element => {
    return (
      <Button1
        src="topcreators"
        svg="rocketLaunch"
        text="View Rankings"
        visible={visible}
      />
    );
  };

  return (
    <div className="top-creators wrapper column">
      <div className="top-creators-header">
        <div className="top-creators-header-inner">
          <h3 className="work-sans">Top Creators</h3>
          <div className="body-work">
            Checkout Top Rated Creators on the NFT Marketplace
          </div>
        </div>
        {getButton("not-mobile")}
      </div>
      <div className="top-creators-users-cards">
        {topUsers?.map((user, index) => (
          <UserCard key={index} user={user} number={index + 1} />
        ))}
      </div>
      {getButton("only-mobile")}
    </div>
  );
};
