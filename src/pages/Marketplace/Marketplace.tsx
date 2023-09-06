import "./Marketplace.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { TabBar } from "../../components/TabBar";
import { Collections } from "./components/Collections";
import { Items } from "./components/Items";
import { searchAPI } from "../../store/api/slice/search";
import { useDebounce } from "../../hooks/useDebounce";
import glass from "../../images/glass.svg";

export const Marketplace = (): JSX.Element => {
  const location = useLocation();

  const [search, setSearch] = useState(location.state?.search || "");
  const [tabBar, setTabBar] = useState(0);

  const [searchRequest, setSearchRequest] = useState(search);

  const { data: items } = searchAPI.useSearchItemQuery(searchRequest);
  const { data: collections } =
    searchAPI.useSearchCollectionQuery(searchRequest);
  const refetch = useDebounce<string>(setSearchRequest, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearch(value);
    refetch(value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
            onChange={handleChange}
          />
          <img src={glass} alt="search" />
        </div>
      </div>
      <div className="marketplace-main">
        <TabBar
          props={[
            { title: "NFTs", amt: items?.length || 0 },
            { title: "Collections", amt: collections?.length || 0 },
          ]}
          setTabBar={setTabBar}
          active={tabBar}
        />
        <div className="marketplace-main-body-bg">
          <div className="marketplace-main-body wrapper">
            {tabBar === 0 ? items ? <Items items={items} /> : "No Items" : null}
            {tabBar === 1 ? (
              collections ? (
                <Collections collections={collections} />
              ) : (
                "No Collections"
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
