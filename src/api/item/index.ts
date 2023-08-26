import { AxiosResponse } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getItem = (params: string): Promise<AxiosResponse> =>
  axiosInstance.get(`${Endpoints.ITEM.GET_ITEM}${params}`);
