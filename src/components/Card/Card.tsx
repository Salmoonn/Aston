import "./Card.css";
import config from "../../config.json";

import { Link } from "react-router-dom";
import { Item } from "../../types/Item";

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps): JSX.Element => {
  const srcImg = config.server + "/i/" + item.id;
  const srcAvatar = item ? config.server + "/a/" + item.creator : item;

  return (
    <Link to={"/i/" + item.id}>
      <div className="card smart">
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
