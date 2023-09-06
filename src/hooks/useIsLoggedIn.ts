import { useSelector } from "react-redux";
import type { RootState } from "../store";

export const useIsLoggedIn = (): boolean =>
  useSelector((state: RootState) => !!state.auth.accessToken);
