import "./ItemPageInfo.css";
import globe from "../../../../images/globe.svg";

import { Item } from "../../../../types/Item";
import { Link } from "react-router-dom";
import { createSrcAvatar } from "../../../../utils/createSrc";
import ActionTime from "./components/ActionTime";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { useEffect, useState } from "react";
import api from "../../../../api";
import { getProfile } from "../../../../store/auth/authAction";

const ItemPageInfo = ({ item }: { item: Item }): JSX.Element => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: RootState) => state.auth.profileData.profile
  );

  const [isAddToFavorites, setisAddToFavorites] = useState(false);

  useEffect(() => {
    setisAddToFavorites(profile?.favorites?.includes(item.id) || false);
  }, [item, profile]);

  const { name, creator, description, tags, id } = item;

  const srcAvatar = createSrcAvatar(item.creator);

  const addToFavorites = async (): Promise<void> => {
    setisAddToFavorites(!isAddToFavorites);

    const res = await api.favorites.addToFavorites(id);
    if (res.data.isAdd) setisAddToFavorites(true);
    if (res.data.isDelete) setisAddToFavorites(false);

    dispatch(getProfile());
  };

  return (
    <div className="item-info wrapper">
      <div className="item-info-body column">
        <div className="item-info-headline column">
          <div className="h2 work-sans">{name}</div>
          <div className="item-minted work-sans">Minted On</div>
        </div>
        <div className="item-info-additional column">
          <div className="item-info-created column">
            <div className="item-info-other only-mobile column">
              {profile?.login !== creator ? (
                <button
                  className="item-info-other-addToFavorites smart work-sans"
                  onClick={addToFavorites}
                  data-isadd={isAddToFavorites}
                >
                  {isAddToFavorites ? "In Favorites" : "Add To Favorites"}
                </button>
              ) : null}
              <ActionTime />
            </div>
            <div className="title">Created By</div>
            <Link to={"/" + creator}>
              <div className="item-info-created-creater">
                <img
                  src={srcAvatar}
                  className="item-creator-avatar"
                  alt="avatar creator"
                />
                <div className="work-sans">{creator}</div>
              </div>
            </Link>
          </div>
          <div className="item-info-description column">
            <div className="title">Description</div>
            <div className="text work-sans">
              {description || "no description"}
            </div>
          </div>
          <div className="item-info-details column">
            <div className="title">Details</div>
            <div className="item-info-details column">
              <div className="item-detail">
                <img src={globe} alt="globe" className="item-details-icon" />
                <div className="work-sans">View on Etherscan</div>
              </div>
              <div className="item-detail">
                <img src={globe} alt="globe" className="item-details-icon" />
                <div className="work-sans">View Original</div>
              </div>
            </div>
          </div>
          <div className="item-info-tags column">
            <div className="item-info-tags-title work-sans">Tags</div>
            <div className="item-tags">
              {tags?.map((e, i) => (
                <Link to="" key={i}>
                  <div className="item-tag work-sans">
                    {e.toLocaleUpperCase()}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="item-info-other not-mobile column">
        {profile?.login !== creator ? (
          <button
            className="item-info-other-addToFavorites smart work-sans"
            onClick={addToFavorites}
            data-isadd={isAddToFavorites}
          >
            {isAddToFavorites ? "In Favorites" : "Add To Favorites"}
          </button>
        ) : null}
        <ActionTime />
      </div>
    </div>
  );
};

export default ItemPageInfo;
