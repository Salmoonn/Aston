import "./Marketplace.css";

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api";
import { Item } from "../../types/Item";
import { ICollection } from "../../types/collection";
import TabBar from "../../components/TabBar";
import glass from "../../images/glass.svg";
import Collections from "./components/Collections";
import Items from "./components/Items";

const Marketplace = (): JSX.Element => {
  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState(location.state?.search || "");
  const [tabBar, setTabBar] = useState(0);

  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [isLoadingICollections, setIsLoadingCollections] = useState(false);

  useEffect(() => {
    request(search);
    inputRef.current?.focus();
  }, []);

  const [items, setItems] = useState<Item[] | null>(null);
  const [collections, setCollections] = useState<ICollection[] | null>(null);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearch(value);
    request(value);
  };

  const request = (params: string): void => {
    setIsLoadingItems(true);
    api.search
      .searchItem(params)
      .then(
        (res) => setItems(res.data),
        () => setItems(null)
      )
      .then(() => setIsLoadingItems(false));

    setIsLoadingCollections(true);
    api.search
      .searchCollection(params)
      .then(
        (res) => setCollections(res.data),
        () => setItems(null)
      )
      .then(() => setIsLoadingCollections(false));
  };

  return (
    <div className="marketplace">
      <div className="marketplace-header wrapper column">
        <div className="marketplace-header-main work-sans column">
          <div className="marketplace-headline">Browse Marketplace</div>
          <div className="marketplace-subhead">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </div>
        </div>
        <div className="marketplace-search">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search your favorite NFTs"
            className="work-sans"
            value={search}
            onChange={inputOnChange}
          />
          <img src={glass} alt="search" />
        </div>
      </div>
      <div className="marketplace-main">
        <TabBar
          props={[
            { title: "NFTs", amt: items?.length || 0 },
            { title: "NFTs", amt: collections?.length || 0 },
          ]}
          setTabBar={setTabBar}
          active={tabBar}
        />
        <div className="marketplace-main-body-bg">
          <div className="marketplace-main-body wrapper">
            {tabBar === 0 ? (
              <Items items={items} isLoading={isLoadingItems} />
            ) : null}
            {tabBar === 1 ? (
              <Collections
                collections={collections}
                isLoading={isLoadingICollections}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
