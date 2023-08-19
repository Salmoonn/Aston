import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { RootState, useAppDispatch } from "./store";
import { getProfile } from "./store/auth/authAction";

function App() {
  const IsLoggerIn = useSelector(
    (state: RootState) => !!state.auth.authData.accessToken
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path=":id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
