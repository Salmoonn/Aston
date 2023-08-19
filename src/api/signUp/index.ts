import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ISignUpRequest } from "./types";

export const signUp = (params: ISignUpRequest): AxiosPromise<any> =>
  axiosInstance.post(Endpoints.SIGN_UP, params);
