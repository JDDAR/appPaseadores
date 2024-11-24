import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/errors/Error404";
import OwnerRegister from "./components/loginComponents/ownerRegister/OwnerRegister";
import OwnerProfile from "./pages/profiles/OwnerProfile";
import WalkerProfile from "./pages/profiles/WalkerProfile";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import AdminProfile from "./pages/profiles/AdminProfile";
import Profiles from "./pages/profiles/Profiles";
import WalkerRegister from "./components/loginComponents/walkerRegister/WalkerRegister";
import SeachWalker from "./pages/SearchWalker";
import Modal from "./components/modals/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/registroDueño" element={<OwnerRegister />} />
          <Route path="/login/registroPaseador" element={<WalkerRegister />} />
          <Route path="/profile/:userId" element={<Profiles />} />
          <Route path="/ownerProfile" element={<OwnerProfile />} />
          <Route path="/walkerProfile" element={<WalkerProfile />} />
          <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route path="/searchWalker" element={<SeachWalker />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
