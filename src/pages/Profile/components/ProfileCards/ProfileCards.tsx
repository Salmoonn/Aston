import config from "../../../../config.json";
import "./ProfileCards.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../../store";
import { deleteItem, getItem } from "../../../../store/items/itemsAction";

const ProfileCards = () => {
  const items = useSelector((state: RootState) => state.profile.data?.item);

  // const arr = Array(9)
  //   .fill("")
  //   .map((e, i) => i);

  return (
    <div className="artist-card-bg">
      <div className="artist-card wrapper">
        {items ? (
          items.map((e) => <Card key={e} id={e} />)
        ) : (
          <div>Sceleton</div>
        )}
      </div>
    </div>
  );
};

const Card = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const item = useSelector((state: RootState) =>
    state.items.find((e) => e.data.id === id)
  );

  useEffect(() => {
    dispatch(getItem(id));
    return () => dispatch(deleteItem(id));
  }, []);

  const srcImg = config.server + "/i/" + id;
  const srcAvatar = item ? config.server + "/a/" + item?.data.creator : item;

  return (
    <Link to={"/i/" + id}>
      <div className="card smart">
        <img className="card-image" src={srcImg} alt="card" />
        <div className="card-body">
          <div className="card-info">
            <div className="work-sans h5">{item?.data.name}</div>
            <div className="card-creator">
              <img
                className="card-creator-avatar"
                src={srcAvatar}
                alt="avatar creator"
              />
              <p className="space-mono">{item?.data.creator}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-price">
              <div className="caption-space">Price</div>
              <div className="base-body-space card-price-body">
                {item?.data.price}
              </div>
            </div>
            <div className="card-bid">
              <div className="caption-space">Highest Bid</div>
              <div className="base-body-space card-price-body">
                {item?.data.highestBid}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCards;
