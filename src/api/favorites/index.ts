import { AxiosResponse } from "axios";
import { Item } from "../../types/Item";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

interface addToFavoritesResponse {
  isAdd?: true;
  isDelete?: true;
}

export const toggleFavorites = (
  itemId: string
): Promise<AxiosResponse<addToFavoritesResponse>> =>
  axiosInstance.post(Endpoints.FAVORITES.TOGGLE_FAVORITES, { itemId });

export const getFavorites = (
  itemsId: string[]
): Promise<AxiosResponse<Item[]>> =>
  axiosInstance.get(Endpoints.FAVORITES.GET_FAVORITES, { params: { itemsId } });
