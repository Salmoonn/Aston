import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import { useAppDispatch } from "./store";
import { refreshToken } from "./store/auth/authAction";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
