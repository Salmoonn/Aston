import Card from "../../../../components/Card";
import { Item } from "../../../../types/Item";

interface ItemsProps {
  items: Item[] | null;
  isLoading: boolean;
}

const Items = ({ items, isLoading }: ItemsProps): JSX.Element => {
  if (isLoading) return <>Loading</>;

  if (items)
    return (
      <>
        {items.map((e) => (
          <Card key={e.id} item={e} />
        ))}
      </>
    );

  return <>Not found</>;
};

export default Items;
