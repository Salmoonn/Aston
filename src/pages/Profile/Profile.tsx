import "./Profile.css";

import defaultAvatar from "../../images/defaultAvatar.png";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import ProfileInfo from "./components/ProfileInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadingProfile } from "../../store/profile/profileAction";
import TabBar from "./components/TabBar";
import ProfileCards from "./components/ProfileCards";
import ProfileCollections from "./components/ProfileCollections";
import { mergeItems } from "../../utils/mergeItems";
import { createSrcAvatar, createSrcBanner } from "../../utils/createSrc";
import { profileToInitialState } from "../../store/profile/profileReducer";

const Profile = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const profile = useSelector((state: RootState) => state.profile);

  const user = profile.data;

  let items = user?.items || null;
  const collections = user?.collections || null;

  items = mergeItems(items, collections);

  const [isLoadingBanner, setIsLoadingBanner] = useState(false);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);

  const srcBanner = createSrcBanner(user?.login);
  const srcAvatar = createSrcAvatar(user?.login);

  useEffect((): any => {
    if (id) dispatch(loadingProfile(id));
    return () => dispatch(profileToInitialState());
  }, [id, dispatch]);

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
      <TabBar
        created={items?.length || 0}
        owned={items?.length || 0}
        collection={collections?.length || 0}
      />
      {
        {
          created: items ? <ProfileCards items={items} /> : "There is not",
          owned: items ? <ProfileCards items={items} /> : "There is not",
          collection: collections ? (
            <ProfileCollections collections={collections} />
          ) : (
            "There is not"
          ),
        }[profile.tabbar]
      }
    </div>
  );
};

export default Profile;
