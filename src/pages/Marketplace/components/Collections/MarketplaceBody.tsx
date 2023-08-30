import Collection from "../../../../components/Collection";
import { ICollection } from "../../../../types/collection";

interface CollectionsProps {
  collections: ICollection[];
}

const Collections = ({ collections }: CollectionsProps): JSX.Element => {
  return (
    <>
      {collections.map((e) => (
        <Collection key={e.id} collection={e} />
      ))}
    </>
  );
};

export default Collections;
