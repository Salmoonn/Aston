import { favoritesAPI } from "../store/api/favorites";
import { useDispatchProfile } from "./useDispatchProfile";

export const useToggleFavorites = (): ((id: string) => void) => {
  const [toggleFavorites] = favoritesAPI.useToggleFavoritesMutation();
  const dispatchProfile = useDispatchProfile();

  return (id: string): void => {
    toggleFavorites(id).unwrap().then(dispatchProfile);
  };
};
