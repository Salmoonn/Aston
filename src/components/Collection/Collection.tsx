import "./Collection.css";
import config from "../../config.json";

import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCollection,
  getCollection,
} from "../../store/collections/collectionsAction";
import { Link } from "react-router-dom";

const Collection = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const collection = useSelector((state: RootState) =>
    state.collections.find((e) => e.data.id === id)
  );

  useEffect(() => {
    dispatch(getCollection(id));
    return () => dispatch(deleteCollection(id));
  });

  const srcImg = collection?.data.body
    .slice(0, 3)
    .map((e) => config.server + "/i/" + e);

  const srcAvatar = config.server + "/a/" + collection?.data.creator;

  console.log(srcImg);

  return (
    <div className="collection column">
      <div className="collection-photos">
        <img
          src={srcImg ? srcImg[0] : ""}
          alt="collectin main"
          className="collection-photo-main smart"
        />
        <div className="collection-frame">
          <img
            src={srcImg ? srcImg[1] : ""}
            alt="collectin other"
            className="collection-photo-other smart"
          />
          <img
            src={srcImg ? srcImg[2] : ""}
            alt="collectin other"
            className="collection-photo-other smart"
          />
          <Link to="/">
            <div className="collection-frame-number smart">
              <div className="space-mono h5">
                {collection?.data.body.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">{collection?.data.name}</div>
        <Link to={collection?.data.creator || "/"}>
          <div className="collection-artist-card">
            <img src={srcAvatar} alt="" className="artist-avatar" />
            <div className="base-body-work collection-artist-name">
              {collection?.data.creator}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
