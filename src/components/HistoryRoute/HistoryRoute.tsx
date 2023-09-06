import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import History from "../../pages/History";
import Login from "../../pages/Login";

export const HistoryRoute = (): JSX.Element => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <History /> : <Login />;
};
