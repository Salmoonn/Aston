import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { SignUpRequest } from "./types";

export const signUp = (params: SignUpRequest): AxiosPromise<any> =>
  axiosInstance.post(Endpoints.SIGN_UP, params);
