import "./ItemPage.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../types/Item";
import api from "../../api";
import { createSrcImg } from "../../utils/createSrc";
import ItemPageInfo from "./components/ItemPageInfo";
import { mergeItems } from "../../utils/mergeItems";
import ItemPageMore from "./components/ItemPageMore";

const ItemPage = (): JSX.Element => {
  const { id } = useParams();

  const [item, setItem] = useState<Item | null>(null);
  const [moreItems, setMoreItems] = useState<Item[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) getItem(id);
  }, [id]);

  const getItem = async (id: string): Promise<void> => {
    setIsLoading(true);
    const item = (await api.item.getItem(id)).data;
    setIsLoading(false);

    setItem(item);
    getMoreItems(item.creator);
  };

  const getMoreItems = async (creatorID: string): Promise<void> => {
    const creator = (await api.profile.getProfile(creatorID)).data;
    const moreItems = mergeItems(creator.items, creator.collections);
    setMoreItems(moreItems);
  };

  const srcImg = createSrcImg(id);

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="item-page">
      <div className="item-cover">
        <img src={srcImg} alt="banner" />
      </div>
      {item ? <ItemPageInfo item={item} /> : "Not found"}
      {item && moreItems ? (
        <ItemPageMore items={moreItems} id={item.id} />
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default ItemPage;
