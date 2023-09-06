import { useSelector } from "react-redux";
import type { RootState } from "../store";

export const useGetHistory = (): string[] | null =>
  useSelector((state: RootState) => state.auth.profile?.history || null);
