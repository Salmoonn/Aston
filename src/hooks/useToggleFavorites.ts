import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { favoritesAPI } from "../store/api/slice/favorites";
import { setProfile } from "../store/slices/authSlice";
import { useIsLoggedIn } from "./useIsLoggedIn";

export const useToggleFavorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  const [toggleFavoritesAPI, { isLoading }] =
    favoritesAPI.useToggleFavoritesMutation();

  const toggleFavorites = (id: string): void => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (!isLoading) {
      toggleFavoritesAPI(id)
        .unwrap()
        .then((res) => dispatch(setProfile(res)));
    }
  };

  return { toggleFavorites, isLoading };
};
