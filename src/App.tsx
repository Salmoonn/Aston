import { lazy, Suspense } from "react";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDebounce } from "./hooks/useDebounce";
import { useRefresh } from "./hooks/useRefresh";
import { getSize } from "./utils/getSize";
import type { Size as SizeType } from "./types/Types";
import { Loading } from "./components/Loading/Loading";
import { AnimLoading } from "./components/AnimLoading/AnimLoading";

const FavoritesRoute = lazy(() => import("./components/FavoritesRoute"));
const HistoryRoute = lazy(() => import("./components/HistoryRoute"));
const ItemPage = lazy(() => import("./pages/ItemPage"));
const LoginRoute = lazy(() => import("./components/LoginRoute"));
const Main = lazy(() => import("./pages/Main"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const Profile = lazy(() => import("./pages/Profile"));
const SignUpRoute = lazy(() => import("./components/SignUpRoute"));

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
        <Loading>
          <Header />
          <Suspense fallback={<AnimLoading />}>
            <Routes>
              <Route index element={<Main />} />
              <Route path="login" element={<LoginRoute />} />
              <Route path="signup" element={<SignUpRoute />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="favorites" element={<FavoritesRoute />} />
              <Route path="history" element={<HistoryRoute />} />
              <Route path="/i/:id" element={<ItemPage />} />
              <Route path=":id" element={<Profile />} />
            </Routes>
          </Suspense>
          <Footer />
        </Loading>
      </BrowserRouter>
    </Size.Provider>
  );
};
