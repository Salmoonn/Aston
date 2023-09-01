import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/auth";
import { setProfile } from "../store/slices/authSlice";

export const useDispatchProfile = (): (() => void) => {
  const dispatch = useAppDispatch();
  const { refetch } = authAPI.useGetProfileQuery();

  const refresh = (): void => {
    refetch()
      .unwrap()
      .then((res) => dispatch(setProfile(res)));
  };

  return refresh;
};
