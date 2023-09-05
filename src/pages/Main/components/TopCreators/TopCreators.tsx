import "./TopCreators.css";
import { userAPI } from "../../../../store/api/slice/user";
import { UserCard } from "./components/UserCard";
import { getButton } from "./utils/getButton";

export const TopCreators = (): JSX.Element => {
  const { data: topUsers } = userAPI.useGetTopUserQuery();

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
