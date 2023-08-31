import { Collection } from "../../../../types/Types";
import { Item } from "../../../../types/Types";
import ProfileCards from "../ProfileCards";
import ProfileCollections from "../ProfileCollections";

interface TabBarProps {
  index: number;
  items: Item[] | null;
  collections: Collection[] | null;
}

const TabBarBody = ({
  index,
  items,
  collections,
}: TabBarProps): JSX.Element => {
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

export default TabBarBody;
