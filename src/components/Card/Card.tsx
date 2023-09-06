import "./Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createSrcAvatar, createSrcImg } from "../../utils/createSrc";
import { useToggleFavorites } from "../../hooks/useToggleFavorites";
import type { Item } from "../../types/Types";
import { useGetProfile } from "../../hooks/useGetProfile";

interface Props {
  item: Item;
}

export const Card = ({ item }: Props): JSX.Element => {
  const { id, creator } = item;
  const profile = useGetProfile();
  const isFavorite = !!profile?.favorites?.find((e) => e.id === id);
  const [isHover, setIsHover] = useState(false);
  const { toggleFavorites, isLoading } = useToggleFavorites();

  const srcImg = createSrcImg(id);
  const srcAvatar = createSrcAvatar(creator);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>): void => {
    e.preventDefault();
    toggleFavorites(id);
  };

  return (
    <Link to={"/i/" + id}>
      <div
        className="card smart"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {creator !== profile?.login ? (
          <svg
            className="card-heart"
            viewBox="0 0 24 24"
            style={{
              ...(isFavorite ? { fill: "#a259ff" } : { fill: "none" }),
              ...(isHover
                ? { visibility: "visible" }
                : { visibility: "hidden" }),
              ...(isLoading ? { cursor: "not-allowed" } : {}),
            }}
            onClick={handleClick}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ) : null}
        <img className="card-image" src={srcImg} alt="card" />
        <div className="card-body">
          <div className="card-info">
            <div className="work-sans h5">{item.name}</div>
            <div className="card-creator">
              <img
                className="card-creator-avatar"
                src={srcAvatar}
                alt="avatar creator"
              />
              <p className="space-mono">{item.creator}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-price">
              <div className="caption-space">Price</div>
              <div className="base-body-space card-price-body">
                {item.price}
              </div>
            </div>
            <div className="card-bid">
              <div className="caption-space">Highest Bid</div>
              <div className="base-body-space card-price-body">
                {item.highestBid}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
