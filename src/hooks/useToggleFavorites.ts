import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/auth";
import { favoritesAPI } from "../store/api/favorites";
import { setProfile } from "../store/slices/authSlice";

export const useToggleFavorites = (): ((id: string) => void) => {
  const dispatch = useAppDispatch();

  const [toggleFavorites] = favoritesAPI.useToggleFavoritesMutation();
  const [getProfile] = authAPI.useGetProfileMutation();

  const dispatchProfile = async (): Promise<void> => {
    const profile = await getProfile(null).unwrap();
    dispatch(setProfile(profile));
  };

  return (id: string): void => {
    toggleFavorites(id).unwrap().then(dispatchProfile);
  };
};
