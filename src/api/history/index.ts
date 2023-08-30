import { AxiosResponse } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const postHistory = (params: string): Promise<AxiosResponse> =>
  axiosInstance.post(Endpoints.HISTORY.POST_HISTORY, { params });
