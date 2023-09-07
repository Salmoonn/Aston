import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { authAPI } from "../store/api/slice/auth";
import { logout as createActionLogout } from "../store/slices/authSlice";

export const useLogout = (): (() => void) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logoutAPI] = authAPI.useLogoutMutation();

  const logout = (): void => {
    localStorage.setItem("refreshToken", "isNotExists");
    dispatch(createActionLogout());
    logoutAPI();
    navigate("/login");
  };

  return logout;
};
