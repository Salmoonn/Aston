import "./ProfileCollections.css";
import Collection from "../../../../components/Collection";
import { ICollection } from "../../../../types/collection";

interface ProfileCollectionsProps {
  collections: ICollection[];
}

const ProfileCollections = ({
  collections,
}: ProfileCollectionsProps): JSX.Element => {
  return (
    <div className="profileCollections-bg">
      <div className="profileCollections wrapper">
        {collections.map((e) => (
          <Collection key={e.id} collection={e} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCollections;
