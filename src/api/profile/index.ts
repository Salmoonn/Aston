import { AxiosResponse } from "axios";
import { User } from "../../types/User";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getProfile = (id: string): Promise<AxiosResponse<User>> =>
  axiosInstance.get(Endpoints.PROFILE.GET_PROFILE, { params: { id } });
