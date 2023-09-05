import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import Favorites from "../../pages/Favorites";
import Login from "../../pages/Login";

export const FavoritesRoute = (): JSX.Element => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <Favorites /> : <Login />;
};
