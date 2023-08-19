import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getItem = (params: string) =>
  axiosInstance.get(Endpoints.ITEM.GET_ITEM + `${params}`);
