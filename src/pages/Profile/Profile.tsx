import "./Profile.css";
import config from "../../config.json";

// import defaultBanner from "../../images/login.png";
import defaultAvatar from "../../images/defaultAvatar.png";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import ProfileInfo from "./components/ProfileInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../store/profile/profileAction";
import TabBar from "./components/TabBar";
import ProfileCards from "./components/ProfileCards";
import ProfileCollections from "./components/ProfileCollections";

const Profile = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const profile = useSelector((state: RootState) => state.profile);

  const srcBanner = config.server + "/b/" + profile.data?.login;
  const srcAvatar = config.server + "/a/" + profile.data?.login;

  const [isLoadingBanner, setIsLoadingBanner] = useState(false);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);

  useEffect(() => {
    params.id && dispatch(getProfile(params.id));
  }, []);

  if (profile.isLoading) {
    return <div>Loading</div>;
  }

  if (!profile.data && !profile.isLoading) {
    return <div>Not found</div>;
  }

  return (
    <div className="profile-page">
      <div className="user-cover">
        <img
          src={srcBanner}
          alt="banner"
          className="user-cover-img"
          style={{ display: isLoadingBanner ? "block" : "none" }}
          onLoad={() => setIsLoadingBanner(true)}
        />
        <img
          src={defaultAvatar}
          alt="avatar"
          className="user-avatar"
          style={{ display: isLoadingAvatar ? "none" : "block" }}
        />
        <img
          src={srcAvatar}
          alt="avatar"
          className="user-avatar"
          style={{ display: isLoadingAvatar ? "block" : "none" }}
          onLoad={() => setIsLoadingAvatar(true)}
        />
      </div>
      <ProfileInfo />
      <TabBar />
      {
        {
          created: <ProfileCards />,
          owned: <ProfileCards />,
          collection: <ProfileCollections />,
        }[profile.tabbar]
      }
    </div>
  );
};

export default Profile;
