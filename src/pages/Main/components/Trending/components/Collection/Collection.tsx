import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../../../store";

import "./Collection.css";

import config from "../../../../../../config.json";
import Endpoints from "../../../../../../api/endpoints";

const server = config.server;

const Collection = ({ number }: { number: number }) => {
  let visible = "";
  number === 1 && (visible = "not-mobile");
  number === 2 && (visible = "only-desktop");

  const collections = useSelector(
    (state: RootState) => state.topCollections.collections
  );

  const { images, creator, id, name } = collections
    ? collections[number]
    : { images: [], creator: null, id: null, name: "name" };

  return (
    <div className={"collection column " + visible}>
      <div className="collection-photos">
        <Link to="/">
          <img
            className="collection-photo-main smart"
            src={server + Endpoints.IMAGE.IMG_ID + images[0].id}
          />
        </Link>
        <div className="collection-frame">
          <Link to="/">
            <img
              className="collection-photo-other smart"
              src={server + Endpoints.IMAGE.IMG_ID + images[1].id}
            />
          </Link>
          <Link to="/">
            <img
              className="collection-photo-other smart"
              src={server + Endpoints.IMAGE.IMG_ID + images[2].id}
            />
          </Link>
          <Link to="/">
            <div className="collection-frame-number smart">
              <div className="space-mono h5">{images?.length - 3}+</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">{name}</div>
        <Link to={creator || "/"}>
          <div className="collection-artist-card">
            <img
              className="collection-artist-avatar"
              src={server + Endpoints.IMAGE.AVATAR_ID + creator}
            />
            <div className="base-body-work collection-artist-name">
              {creator}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
