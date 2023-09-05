import "./Collection.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Collection as ICollection } from "../../types/Types";
import { createSrcAvatar } from "../../utils/createSrc";
import { createSrcImages } from "./utils/createSrcImages";

interface CollectionProps {
  collection: ICollection;
}

export const Collection = ({ collection }: CollectionProps): JSX.Element => {
  const [isLoadingMainPhoto, setIsloadingMainPhoto] = useState(false);
  const [isLoadingOther1Photo, setIsloadingOther1Photo] = useState(false);
  const [isLoadingOther2Photo, setIsloadingOther2Photo] = useState(false);

  const srcImg = createSrcImages(collection);
  const srcAvatar = createSrcAvatar(collection.creator);

  return (
    <div className="collection column">
      <div className="collection-photos">
        <img
          src={srcImg ? srcImg[0] : ""}
          alt="collectin main"
          className="collection-photo-main smart"
          style={{ visibility: isLoadingMainPhoto ? "visible" : "hidden" }}
          onLoad={() => setIsloadingMainPhoto(true)}
        />
        <div className="collection-frame">
          <img
            src={srcImg ? srcImg[1] : ""}
            alt="collectin other"
            className="collection-photo-other smart"
            style={{ visibility: isLoadingOther1Photo ? "visible" : "hidden" }}
            onLoad={() => setIsloadingOther1Photo(true)}
          />
          <img
            src={srcImg ? srcImg[2] : ""}
            alt="collectin other"
            className="collection-photo-other smart"
            style={{ visibility: isLoadingOther2Photo ? "visible" : "hidden" }}
            onLoad={() => setIsloadingOther2Photo(true)}
          />
          <Link to="/">
            <div className="collection-frame-number smart">
              <div className="space-mono h5">
                {"+"}
                {collection.body.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">{collection.name}</div>
        <Link to={collection.creator || "/"}>
          <div className="collection-artist-card">
            <img src={srcAvatar} alt="" className="artist-avatar" />
            <div className="base-body-work collection-artist-name">
              {collection.creator}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
