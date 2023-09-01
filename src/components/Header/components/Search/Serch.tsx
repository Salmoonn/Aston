import "./Search.css";

import glass from "../../../../images/glass.svg";
import React, { useEffect, useRef, useState } from "react";
import { Item } from "../../../../types/Types";
import { useLocation, useNavigate } from "react-router-dom";
import { createSrcImg } from "../../../../utils/createSrc";
import { store } from "../../../../store";
import { searchAPI } from "../../../../store/api/search";
import { historyAPI } from "../../../../store/api/history";
import { useDispatchProfile } from "../../../../hooks/useDispatchProfile";

const Search = (): JSX.Element | null => {
  const location = useLocation();

  store.getState();

  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);

  const { data: items, isLoading } = searchAPI.useSearchItemQuery(search);
  const [postHistory] = historyAPI.usePostHistoryMutation();
  const dispatchProfile = useDispatchProfile();

  const refInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const submit = (): void => {
    postHistory(search);
    dispatchProfile();
    navigate("/marketplace", { state: { search: search } });
    setActive(false);
  };

  const inputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") submit();
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setActive(true);
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, [active]);

  const handleClick = (e: any): void => {
    setActive(false);
    document.removeEventListener("click", handleClick);
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

  if (location.pathname === "/marketplace") return null;

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
      <img className="search-glass" src={glass} alt="search" onClick={submit} />
      <div
        className="search-list column"
        style={{ visibility: active ? "visible" : "hidden" }}
      >
        {isLoading ? (
          <div className="work-sans" style={{ color: "black" }}>
            Loading
          </div>
        ) : items ? (
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
