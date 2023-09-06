import { useNavigate } from "react-router-dom";
import { createSrcImg } from "../../../../../../utils/createSrc";
import type { Item } from "../../../../../../types/Types";

interface Props {
  item: Item;
}

export const SearchItem = ({ item }: Props): JSX.Element => {
  const { id } = item;

  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/i/${id}`);
  };

  return (
    <div className="search-list-elem" onClick={handleClick}>
      <img src={createSrcImg(item.id)} alt="preview" className="search-img" />
      <div className="search-item-name work-sans">{item.name}</div>
    </div>
  );
};
