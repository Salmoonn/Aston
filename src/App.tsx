import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useRefresh } from "./hooks/useRefresh";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { RootState } from "./store";

const App = (): JSX.Element => {
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.auth.accessToken
  );

  const refresh = useRefresh();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route
          path="favorites"
          element={isLoggedIn ? <Favorites /> : <Login />}
        />
        <Route path="history" element={isLoggedIn ? <History /> : <Login />} />
        <Route path="/i/:id" element={<ItemPage />} />
        <Route path=":id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
