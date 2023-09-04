import { useDispatch } from "react-redux";
import { favoritesAPI } from "../store/api/slice/favorites";
import { setProfile } from "../store/slices/authSlice";
import { useDispatchProfile } from "./useDispatchProfile";

export const useToggleFavorites = () => {
  const dispatch = useDispatch();
  const [toggleFavoritesAPI, { isLoading }] =
    favoritesAPI.useToggleFavoritesMutation();
  // const dispatchProfile = useDispatchProfile();

  const toggleFavorites = (id: string) => {
    toggleFavoritesAPI(id)
      .unwrap()
      .then((res) => dispatch(setProfile(res)));
  };

  return { toggleFavorites, isLoading };
};
