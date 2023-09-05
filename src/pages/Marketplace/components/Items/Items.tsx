import { Card } from "../../../../components/Card";
import { Item } from "../../../../types/Types";

interface ItemsProps {
  items: Item[];
}

export const Items = ({ items }: ItemsProps): JSX.Element => {
  return (
    <>
      {items.map((e) => (
        <Card key={e.id} item={e} />
      ))}
    </>
  );
};
