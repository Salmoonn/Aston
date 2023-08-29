import "./Card.css";

import { Link, useNavigate } from "react-router-dom";
import { Item } from "../../types/Item";
import { createSrcAvatar, createSrcImg } from "../../utils/createSrc";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import api from "../../api";
import { getProfile } from "../../store/auth/authAction";

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps): JSX.Element => {
  const { id, creator } = item;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const srcImg = createSrcImg(id);
  const srcAvatar = createSrcAvatar(creator);

  const profile = useSelector(
    (state: RootState) => state.auth.profileData.profile
  );

  const [isHover, setIsHover] = useState(false);
  const [isfavorites, setIsFavorites] = useState(false);

  useEffect(() => {
    setIsFavorites(profile?.favorites?.includes(id) || false);
  }, [id, profile]);

  const toggleFavorites = async (
    e: React.MouseEvent<SVGSVGElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!profile) navigate("/login");
    setIsFavorites(!isfavorites);

    const res = await api.favorites.addToFavorites(id);
    if (res) {
      if (res.data.isAdd) setIsFavorites(true);
      if (res.data.isDelete) setIsFavorites(false);
      dispatch(getProfile());
    }
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
              ...(isfavorites ? { fill: "#a259ff" } : { fill: "none" }),
              ...(isHover
                ? { visibility: "visible" }
                : { visibility: "hidden" }),
            }}
            onClick={toggleFavorites}
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
