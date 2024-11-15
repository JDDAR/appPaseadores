import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/errors/Error404";
import OwnerRegister from "./components/loginComponents/OwnerRegister";
import Home from "./pages/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/registroDueño" element={<OwnerRegister />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;