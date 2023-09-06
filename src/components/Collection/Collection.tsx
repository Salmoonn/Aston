import "./Collection.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import type { Collection as ICollection } from "../../types/Types";
import { createSrcAvatar } from "../../utils/createSrc";
import { createSrcImages } from "./utils/createSrcImages";

interface Props {
  collection: ICollection;
}

export const Collection = ({ collection }: Props): JSX.Element => {
  const [isLoadingMainPhoto, setIsLoadingMainPhoto] = useState(false);
  const [isLoadingOther1Photo, setIsLoadingOther1Photo] = useState(false);
  const [isLoadingOther2Photo, setIsLoadingOther2Photo] = useState(false);

  const srcImg = createSrcImages(collection);
  const srcAvatar = createSrcAvatar(collection.creator);

  return (
    <div className="collection column">
      <div className="collection-photos">
        <img
          src={srcImg ? srcImg[0] : ""}
          alt="collection main"
          className="collection-photo-main smart"
          style={{ visibility: isLoadingMainPhoto ? "visible" : "hidden" }}
          onLoad={() => setIsLoadingMainPhoto(true)}
        />
        <div className="collection-frame">
          <img
            src={srcImg ? srcImg[1] : ""}
            alt="collection other"
            className="collection-photo-other smart"
            style={{ visibility: isLoadingOther1Photo ? "visible" : "hidden" }}
            onLoad={() => setIsLoadingOther1Photo(true)}
          />
          <img
            src={srcImg ? srcImg[2] : ""}
            alt="collection other"
            className="collection-photo-other smart"
            style={{ visibility: isLoadingOther2Photo ? "visible" : "hidden" }}
            onLoad={() => setIsLoadingOther2Photo(true)}
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
