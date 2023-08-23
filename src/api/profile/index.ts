import { AxiosResponse } from "axios";
import { axiosInstance } from "../instance";

export const getProfile = (params: string): Promise<AxiosResponse> =>
  axiosInstance.get(`/${params}`);
