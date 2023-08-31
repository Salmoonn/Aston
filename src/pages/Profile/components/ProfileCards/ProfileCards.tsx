import Card from "../../../../components/Card";
import { Item } from "../../../../types/Types";

interface ProfileCardProps {
  items: Item[];
}

const ProfileCards = ({ items }: ProfileCardProps): JSX.Element => {
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

export default ProfileCards;
