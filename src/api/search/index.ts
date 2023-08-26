import { AxiosResponse } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const searchItem = (search: string): Promise<AxiosResponse> =>
  axiosInstance.get(Endpoints.SEARCH.SEARCH_ITEM, { params: { search } });

export const searchCollection = (search: string): Promise<AxiosResponse> =>
  axiosInstance.get(Endpoints.SEARCH.SEARCH_COLLECTION, { params: { search } });
