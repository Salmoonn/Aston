import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Profile } from "../types/Types";

export const useGetProfile = (): Profile | null =>
  useSelector((state: RootState) => state.auth.profile);
