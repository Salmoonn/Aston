import { AxiosResponse } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const search = (search: string): Promise<AxiosResponse> =>
  axiosInstance.get(Endpoints.SEARCH, { params: { search } });
