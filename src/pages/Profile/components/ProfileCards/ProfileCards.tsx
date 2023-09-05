import { Card } from "../../../../components/Card";
import type { Item } from "../../../../types/Types";

interface Props {
  items: Item[];
}

export const ProfileCards = ({ items }: Props): JSX.Element => {
  return (
    <div className="artist-card-bg">
      <div className="artist-card wrapper">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
