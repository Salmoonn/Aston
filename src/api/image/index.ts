import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

// export const getImage = (params: { image: string }): AxiosPromise<any> =>
//   axiosInstance.get(Endpoints.IMAGE, { params });

export const getImages = (): AxiosPromise<any> =>
  axiosInstance.get(Endpoints.IMAGE.IMAGES);
