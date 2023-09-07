import "./ItemPage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createSrcImg } from "../../utils/createSrc";
import { ItemPageInfo } from "./components/ItemPageInfo";
import { ItemPageMore } from "./components/ItemPageMore";
import { itemAPI } from "../../store/api/slice/item";
import { Loading } from "../../components/Loading/Loading";
import { AnimLoading } from "../../components/AnimLoading/AnimLoading";

export const ItemPage = (): JSX.Element => {
  const { id } = useParams();

  const { data: item, isLoading } = itemAPI.useGetItemQuery(id || "");
  const { data: moreItems } = itemAPI.useGetMoreItemsQuery(id || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const srcImg = id ? createSrcImg(id) : "";

  if (isLoading) {
    return <AnimLoading />;
  }

  if (!item) {
    return <h4 className="work-sans">Not item</h4>;
  }

  return (
    <div className="item-page">
      <div className="item-cover">
        <img src={srcImg} alt="banner" />
      </div>
      <ItemPageInfo item={item} />
      <ItemPageMore items={moreItems} creator={item.creator} />
    </div>
  );
};
