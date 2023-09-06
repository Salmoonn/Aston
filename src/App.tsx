import { lazy, Suspense } from "react";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDebounce } from "./hooks/useDebounce";
import { useRefresh } from "./hooks/useRefresh";
import { getSize } from "./utils/getSize";
import type { Size as SizeType } from "./types/Types";

const FavoritesRoute = lazy(() => import("./components/FavoritesRoute"));
const HistoryRoute = lazy(() => import("./components/HistoryRoute"));
const ItemPage = lazy(() => import("./pages/ItemPage"));
const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const Profile = lazy(() => import("./pages/Profile"));
const Signup = lazy(() => import("./pages/Signup"));

const initSize = {
  isDesktop: true,
  isLaptop: false,
  isMobile: false,
};
export const Size = createContext(initSize);

export const App = (): JSX.Element => {
  const [size, setSize] = useState<SizeType>(initSize);
  const resize = useDebounce(() => setSize(getSize()), 300);
  const refresh = useRefresh();

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return window.removeEventListener("resize", resize);
  }, []);

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
            <Route path="favorites" element={<FavoritesRoute />} />
            <Route path="history" element={<HistoryRoute />} />
            <Route path="/i/:id" element={<ItemPage />} />
            <Route path=":id" element={<Profile />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </Size.Provider>
  );
};
