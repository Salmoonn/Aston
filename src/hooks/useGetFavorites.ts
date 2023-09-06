import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Item } from "../types/Types";

export const useGetFavorites = (): Item[] | null =>
  useSelector((state: RootState) => state.auth.profile?.favorites || null);
