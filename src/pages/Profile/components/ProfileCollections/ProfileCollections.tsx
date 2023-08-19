import "./ProfileCollections.css";
import Collection from "../../../../components/Collection";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const ProfileCollections = () => {
  const collections = useSelector(
    (state: RootState) => state.profile.data?.collection
  );

  return (
    <div className="profileCollections-bg">
      <div className="profileCollections wrapper">
        {collections
          ? collections.map((e) => <Collection key={e} id={e} />)
          : "ProfileCollectionSceleton"}
      </div>
    </div>
  );
};

export default ProfileCollections;
