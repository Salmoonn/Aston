import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
