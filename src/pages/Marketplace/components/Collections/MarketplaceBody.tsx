import Collection from "../../../../components/Collection";
import { ICollection } from "../../../../types/collection";

interface CollectionsProps {
  collections: ICollection[] | null;
  isLoading: boolean;
}

const Collections = ({
  collections,
  isLoading,
}: CollectionsProps): JSX.Element => {
  if (isLoading) return <>Loading</>;

  if (collections)
    return (
      <>
        {collections.map((e) => (
          <Collection key={e.id} collection={e} />
        ))}
      </>
    );

  return <>Not found</>;
};

export default Collections;
