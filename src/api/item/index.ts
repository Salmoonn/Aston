import { AxiosResponse } from "axios";
import { Item } from "../../types/Item";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getItem = (id: string): Promise<AxiosResponse<Item>> =>
  axiosInstance.get(Endpoints.ITEM.GET_ITEM, { params: { id } });
