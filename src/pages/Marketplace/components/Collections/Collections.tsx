import { Collection } from "../../../../components/Collection";
import type { Collection as ICollection } from "../../../../types/Types";

interface Props {
  collections: ICollection[];
}

export const Collections = ({ collections }: Props): JSX.Element => {
  return (
    <>
      {collections.map((e) => (
        <Collection key={e.id} collection={e} />
      ))}
    </>
  );
};
