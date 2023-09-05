import "./Profile.css";

import defaultAvatar from "../../images/defaultAvatar.png";

import { ProfileInfo } from "./components/ProfileInfo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { TabBar } from "../../components/TabBar";
import { mergeItems } from "../../utils/mergeItems";
import { createSrcAvatar, createSrcBanner } from "../../utils/createSrc";
import { TabBarBody } from "./components/TabBarBody";
import { userAPI } from "../../store/api/slice/user";

export const Profile = (): JSX.Element => {
  const { id = "" } = useParams();
  const [tabBar, setTabBar] = useState(0);

  const { data: user, isLoading } = userAPI.useGetUserQuery(id);

  let items = user?.items || null;
  const collections = user?.collections || null;

  items = mergeItems(items, collections);

  const [isLoadingBanner, setIsLoadingBanner] = useState(false);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);

  const srcBanner = user ? createSrcBanner(user.login) : "";
  const srcAvatar = user ? createSrcAvatar(user.login) : "";

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!user && !isLoading) {
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
      {user && (
        <>
          <ProfileInfo user={user} />
          <TabBar
            props={[
              { title: "Created", amt: items?.length || 0 },
              { title: "Owned", amt: items?.length || 0 },
              { title: "Collection", amt: collections?.length || 0 },
            ]}
            active={tabBar}
            setTabBar={setTabBar}
          />
          <TabBarBody index={tabBar} items={items} collections={collections} />
        </>
      )}
    </div>
  );
};

export default Profile;
