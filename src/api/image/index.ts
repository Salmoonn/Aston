import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getImages = (): AxiosPromise<any> =>
  axiosInstance.get(Endpoints.IMAGE.IMAGES);
