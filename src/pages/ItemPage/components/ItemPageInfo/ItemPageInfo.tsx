import "./ItemPageInfo.css";
import globe from "../../../../images/globe.svg";

import { Item } from "../../../../types/Types";
import { Link } from "react-router-dom";
import { createSrcAvatar } from "../../../../utils/createSrc";
import ActionTime from "./components/ActionTime";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ButtonFavorites from "./components/ButtonFavorites";
import { useToggleFavorites } from "../../../../hooks/useToggleFavorites";

const ItemPageInfo = ({ item }: { item: Item }): JSX.Element => {
  const { name, creator, description, tags, id, minted } = item;
  const profile = useSelector((state: RootState) => state.auth.profile);
  const isInFavorites = !!profile?.favorites?.find((e) => e.id === id);
  const srcAvatar = createSrcAvatar(creator);
  const { toggleFavorites, isLoading } = useToggleFavorites();

  const date = new Date(minted);

  return (
    <div className="item-info wrapper">
      <div className="item-info-body column">
        <div className="item-info-headline column">
          <div className="h2 work-sans">{name}</div>
          <div className="item-minted work-sans">
            Minted On {date.toDateString()}
          </div>
        </div>
        <div className="item-info-additional column">
          <div className="item-info-created column">
            <div className="item-info-other only-mobile column">
              {profile?.login !== creator ? (
                <ButtonFavorites
                  isLoading={isLoading}
                  isAddToFavorites={isInFavorites}
                  toggleFavorites={(): void => toggleFavorites(id)}
                />
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
            <div className="item-tags work-sans">
              {tags
                ? tags.map((e, i) => (
                    <div key={i} style={{ cursor: "not-allowed" }}>
                      <div className="item-tag work-sans">
                        {e.toLocaleUpperCase()}
                      </div>
                    </div>
                  ))
                : "Not tags"}
            </div>
          </div>
        </div>
      </div>
      <div className="item-info-other not-mobile column">
        {profile?.login !== creator ? (
          <ButtonFavorites
            isLoading={isLoading}
            isAddToFavorites={isInFavorites}
            toggleFavorites={(): void => toggleFavorites(id)}
          />
        ) : null}
        <ActionTime />
      </div>
    </div>
  );
};

export default ItemPageInfo;
