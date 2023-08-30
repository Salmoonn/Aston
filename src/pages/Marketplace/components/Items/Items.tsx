import Card from "../../../../components/Card";
import { Item } from "../../../../types/Item";

interface ItemsProps {
  items: Item[];
}

const Items = ({ items }: ItemsProps): JSX.Element => {
  return (
    <>
      {items.map((e) => (
        <Card key={e.id} item={e} />
      ))}
    </>
  );
};

export default Items;
