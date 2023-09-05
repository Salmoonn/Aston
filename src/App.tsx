import React, { lazy, Suspense } from "react";
import { useEffect, useState, createContext } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDebounce } from "./hooks/useDebounce";
import { useRefresh } from "./hooks/useRefresh";
import { RootState } from "./store";
import { Size as SizeType } from "./types/Types";
import { getSize } from "./utils/getSize";

const Favorites = lazy(() => import("./pages/Favorites"));
const History = lazy(() => import("./pages/History"));
const ItemPage = lazy(() => import("./pages/ItemPage"));
const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const Profile = lazy(() => import("./pages/Profile"));
const Signup = lazy(() => import("./pages/Signup"));

export const Size = createContext({} as SizeType);

const App = (): JSX.Element => {
  const isLoggedIn = useSelector(
    (state: RootState) => !!state.auth.accessToken
  );

  const [size, setSize] = useState<SizeType>({
    isDesktop: true,
    isLaptop: false,
    isMobile: false,
  });

  const resize = useDebounce(() => setSize(getSize()), 300);

  window.addEventListener("resize", resize);

  const refresh = useRefresh();

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    return window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => () => window.removeEventListener("resize", resize), []);

  return (
    <Size.Provider value={size}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h4>Loading...</h4>}>
          <Routes>
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route
              path="favorites"
              element={isLoggedIn ? <Favorites /> : <Login />}
            />
            <Route
              path="history"
              element={isLoggedIn ? <History /> : <Login />}
            />
            <Route path="/i/:id" element={<ItemPage />} />
            <Route path=":id" element={<Profile />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </Size.Provider>
  );
};

export default App;
