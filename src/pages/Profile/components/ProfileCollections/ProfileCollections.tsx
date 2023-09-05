import "./ProfileCollections.css";
import { Collection } from "../../../../components/Collection";
import type { Collection as ICollection } from "../../../../types/Types";

interface Props {
  collections: ICollection[];
}

export const ProfileCollections = ({ collections }: Props): JSX.Element => {
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
