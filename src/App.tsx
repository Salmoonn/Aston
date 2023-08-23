import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useAppDispatch } from "./store";
import { refresh } from "./store/auth/authAction";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path=":id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
