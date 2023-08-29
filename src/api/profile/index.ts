import { AxiosResponse } from "axios";
import { User } from "../../types/User";
import { axiosInstance } from "../instance";

export const getProfile = (params: string): Promise<AxiosResponse<User>> =>
  axiosInstance.get(`/${params}`);
