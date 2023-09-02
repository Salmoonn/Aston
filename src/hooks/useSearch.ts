import { useState } from "react";
import { searchAPI } from "../store/api/slice/search";
import { useDebounce } from "./useDebounce";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchRequest, setSearchRequest] = useState("");
  const { data: items } = searchAPI.useSearchItemQuery(searchRequest);

  const request = useDebounce(setSearchRequest, 300);

  const searching = (value: string): void => {
    setSearch(value);
    request(search);
  };

  return { items, searching };
};
