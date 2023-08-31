import "./Card.css";

import { Link, useNavigate } from "react-router-dom";
import { Item } from "../../types/Types";
import { createSrcAvatar, createSrcImg } from "../../utils/createSrc";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useToggleFavorites } from "../../hooks/useToggleFavorites";

interface CardProps {
  item: Item;
  toggleFavorite?: () => void;
}

const Card = ({ item, toggleFavorite }: CardProps): JSX.Element => {
  const { id, creator } = item;

  const navigate = useNavigate();

  const profile = useSelector((state: RootState) => state.auth.profile);
  const isfavorite = !!profile?.favorites?.find((e) => e.id === id);
  const [isHover, setIsHover] = useState(false);
  const toggleFavorites = useToggleFavorites();

  const srcImg = createSrcImg(id);
  const srcAvatar = createSrcAvatar(creator);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>): void => {
    e.preventDefault();
    if (!profile) {
      navigate("/login");
    } else toggleFavorites(id);
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
              ...(isfavorite ? { fill: "#a259ff" } : { fill: "none" }),
              ...(isHover
                ? { visibility: "visible" }
                : { visibility: "hidden" }),
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

export default Card;
