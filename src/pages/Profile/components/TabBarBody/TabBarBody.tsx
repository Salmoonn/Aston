import type { Collection } from "../../../../types/Types";
import type { Item } from "../../../../types/Types";
import { ProfileCards } from "../ProfileCards";
import { ProfileCollections } from "../ProfileCollections";

interface Props {
  index: number;
  items: Item[] | null;
  collections: Collection[] | null;
}

export const TabBarBody = ({
  index,
  items,
  collections,
}: Props): JSX.Element => {
  switch (index) {
    case 0: {
      if (items) return <ProfileCards items={items} />;
      else return <div>Items is not</div>;
    }
    case 1: {
      if (items) return <ProfileCards items={items} />;
      else return <div>Items is not</div>;
    }
    case 2: {
      if (collections) return <ProfileCollections collections={collections} />;
      else return <div>Collections is not</div>;
    }
  }

  return <div>Error</div>;
};
