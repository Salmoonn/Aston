import "./TabBar.css";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { profileTabBar } from "../../../../store/profile/profileReducer";

const TabBar = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className="tab-bar">
      <div className="tab-bar-body wrapper">
        <button
          className={"tab-bar-button"}
          onClick={() => dispatch(profileTabBar("created"))}
          data-active={profile.tabbar === "created"}
        >
          <div className="tab-bar-text work-sans">Created</div>
          <div className="tab-bar-num space-mono not-mobile">
            {profile.data?.item?.length || 0}
          </div>
        </button>
        <button
          className={"tab-bar-button"}
          onClick={() => dispatch(profileTabBar("owned"))}
          data-active={profile.tabbar === "owned"}
        >
          <div className="tab-bar-text work-sans">Owned</div>
          <div className="tab-bar-num space-mono not-mobile">
            {profile.data?.item?.length || 0}
          </div>
        </button>
        <button
          className={"tab-bar-button"}
          onClick={() => dispatch(profileTabBar("collection"))}
          data-active={profile.tabbar === "collection"}
        >
          <div className="tab-bar-text work-sans">Collection</div>
          <div className="tab-bar-num space-mono not-mobile">
            {profile.data?.collection?.length || 0}
          </div>
        </button>
      </div>
    </div>
  );
};

export default TabBar;
