import "./ItemPageMore.css";

import Button1 from "../../../../components/Button";
import Card from "../../../../components/Card";
import { Item } from "../../../../types/Item";

interface ItemPageMoreProps {
  items: Item[];
  id: string;
}

const ItemPageMore = ({ items, id }: ItemPageMoreProps): JSX.Element => {
  return (
    <div className="item-page-more wrapper column">
      <div className="item-page-more-headline">
        <div className="title work-sans">More From This Artist</div>
        <Button1
          src={items[0].creator}
          svg={"arrowRight"}
          text="Go To Artist Page"
          visible="not-mobile"
        />
      </div>
      <div className="item-page-more-body">
        {items
          .filter((e) => e.id !== id)
          .map((e) => (
            <Card item={e} key={e.id} />
          ))}
      </div>
      <Button1
        src={items[0].creator}
        svg={"arrowRight"}
        text="Go To Artist Page"
        visible="only-mobile"
      />
    </div>
  );
};

export default ItemPageMore;
