import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
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
        <Route index element={"Main"} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="history" element={<History />} />
        <Route path="/i/:id" element={<ItemPage />} />
        <Route path=":id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
