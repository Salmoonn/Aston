import "./Search.css";

import glass from "../../../../images/glass.svg";
import React, { useEffect, useRef, useState } from "react";
import api from "../../../../api";
import { Item } from "../../../../types/Item";
import { useNavigate } from "react-router-dom";
import { createSrcImg } from "../../../../utils/createSrc";

const Search = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<Item[] | null>(null);
  const [active, setActive] = useState(false);

  const refInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const inputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      navigate("/juanie");
      setActive(false);
    }
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setActive(true);
    const value = e.target.value;

    setSearch(value);
    value ? request(value) : setItems(null);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, [active]);

  const handleClick = (e: any): void => {
    setActive(false);
    document.removeEventListener("click", handleClick);
  };

  const request = async (params: string): Promise<void> => {
    const data = (await api.search.search(params)).data;

    if (data.length === 0) {
      setItems(null);
    } else setItems(data);
  };

  const searchOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (!active) {
      e.stopPropagation();
      setActive(true);
    }
    refInput.current?.focus();
  };

  return (
    <div className="search" data-active={active} onClick={searchOnClick}>
      <input
        ref={refInput}
        type="text"
        placeholder="Search your favorite NFTs"
        className="work-sans"
        value={search}
        onChange={inputChange}
        onKeyUp={inputKeyUp}
      />
      <img className="search-glass" src={glass} alt="search" />
      <div
        className="search-list column"
        style={{ visibility: active ? "visible" : "hidden" }}
      >
        {items ? (
          items.map((e) => <SearchItem key={e.id} item={e} />)
        ) : (
          <div className="work-sans" style={{ color: "black" }}>
            Not found
          </div>
        )}
      </div>
    </div>
  );
};

const SearchItem = ({ item }: { item: Item }): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/i/${item.id}`);
  };

  return (
    <div className="search-list-elem" onClick={handleClick}>
      <img src={createSrcImg(item.id)} alt="preview" className="search-img" />
      <div className="search-item-name work-sans">{item.name}</div>
    </div>
  );
};

export default Search;
