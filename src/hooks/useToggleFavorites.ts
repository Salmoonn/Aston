import { useDispatch } from "react-redux";
import { favoritesAPI } from "../store/api/slice/favorites";
import { setProfile } from "../store/slices/authSlice";

export const useToggleFavorites = () => {
  const dispatch = useDispatch();
  const [toggleFavoritesAPI, { isLoading }] =
    favoritesAPI.useToggleFavoritesMutation();

  const toggleFavorites = (id: string): void => {
    toggleFavoritesAPI(id)
      .unwrap()
      .then((res) => dispatch(setProfile(res)));
  };

  return { toggleFavorites, isLoading };
};
