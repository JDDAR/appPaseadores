import React from "react";
import HeaderMenu from "../../components/header/HeaderMenu";
import HeaderProfile from "../../components/profilesComponents/HeaderProfile";
import NavProfile from "../../components/profilesComponents/NavProfile";
import { Routes, Route, Outlet } from "react-router-dom";
import EditProfile from "../../components/profilesComponents/usersProfiles/EditProfile";
import ReservationProfile from "../../components/profilesComponents/usersProfiles/ReservationProfile";

const OwnerProfileLayout = () => {
  const navOwner = [
    { path: "reservations", label: "Reservas" },
    { path: "edit", label: "Editar Perfil" },
  ];
  return (
    <div className="container">
      <header className="headerLogin">
        <HeaderMenu buttonTo="" />
      </header>
      <div className="container containerContent">
        <HeaderProfile />
        <NavProfile links={navOwner} />
        {/* Marcador de posición para rutas hijas */}
        <div className="contentProfile">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const OwnerProfile = () => {
  return (
    <Routes>
      <Route path="/" element={<OwnerProfileLayout />}>
        <Route path="edit" element={<EditProfile />} />
        <Route path="reservations" element={<ReservationProfile />} />
      </Route>
    </Routes>
  );
};

export default OwnerProfile;
