import { Card } from "../../../../components/Card";
import type { Item } from "../../../../types/Types";

interface Props {
  items: Item[];
}

export const Items = ({ items }: Props): JSX.Element => {
  return (
    <>
      {items.map((e) => (
        <Card key={e.id} item={e} />
      ))}
    </>
  );
};
