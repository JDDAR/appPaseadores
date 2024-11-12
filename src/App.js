import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/errors/Error404";
import Login from "./components/login/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
