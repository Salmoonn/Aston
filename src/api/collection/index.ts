import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getTopcollection = (): AxiosPromise<Array<string>> =>
  axiosInstance.get(Endpoints.COLLECTION.TOP_COLLECTION);

export const getCollection = (params: string) =>
  axiosInstance.get(Endpoints.COLLECTION.GET_COLLECTION + params);
