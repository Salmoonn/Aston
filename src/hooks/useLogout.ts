import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/slice/auth";
import { setInitialState } from "../store/slices/authSlice";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logout] = authAPI.useLogoutMutation();

  return (): void => {
    dispatch(setInitialState());
    logout();
    navigate("/login");
  };
};
