import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getProfile = (params: string) => axiosInstance.get(`/${params}`);
