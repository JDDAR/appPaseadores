import React from "react";
import HeaderMenu from "../../components/header/HeaderMenu";
import HeaderProfile from "../../components/profilesComponents/HeaderProfile";
import NavProfile from "../../components/profilesComponents/NavProfile";
import { Routes, Route, Outlet } from "react-router-dom";
import EditProfile from "../../components/profilesComponents/usersProfiles/EditProfile";
import ReservationProfile from "../../components/profilesComponents/usersProfiles/ReservationProfile";
import CalendarWalker from "../../components/profilesComponents/componetsWalkerProfile/CalendarWalker";
import ToggleButton from "../../components/profilesComponents/componetsWalkerProfile/ToggleButton";
import { useSelector } from "react-redux";

const WalkerProfileLayout = () => {
  const navWalker = [
    { path: "reservations", label: "Reservas" },
    { path: "edit", label: "Editar Perfil" },
    { path: "calendario", label: "Calendario" },
  ];
  return (
    <div className="container">
      <header className="headerLogin">
        <HeaderMenu />
      </header>
      <div className="container containerContent">
        <HeaderProfile />
        <NavProfile links={navWalker} />
        <div className="contentProfile">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const WalkerProfile = () => {
  const userId = useSelector((state) => state.register.userData.userId);
  return (
    <Routes>
      <Route path="/" element={<WalkerProfileLayout />}>
        <Route path="edit" element={<EditProfile />} />
        <Route
          path="reservations"
          element={<ReservationProfile userId={userId} role="walker" />}
        />
      </Route>
    </Routes>
  );
};

export default WalkerProfile;
