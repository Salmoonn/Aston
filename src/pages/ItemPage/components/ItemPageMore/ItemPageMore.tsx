import "./ItemPageMore.css";
import { Card } from "../../../../components/Card";
import type { Item } from "../../../../types/Types";
import { getButton } from "./utils/getButton";

interface Props {
  items: Item[] | null | undefined;
  creator: string;
}

export const ItemPageMore = ({ items, creator }: Props): JSX.Element => {
  return (
    <div className="item-page-more wrapper column">
      <div className="item-page-more-headline">
        <div className="title work-sans">More From This Artist</div>
        {getButton("not-mobile", creator)}
      </div>
      <div className="item-page-more-body work-sans">
        {items
          ? items.map((e) => <Card item={e} key={e.id} />)
          : "Not more items"}
      </div>
      {getButton("only-mobile", creator)}
    </div>
  );
};
