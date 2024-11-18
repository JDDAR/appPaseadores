import React from "react";
import HeaderMenu from "../../components/header/HeaderMenu";
import CalendarWalker from "../../components/profilesComponents/componetsWalkerProfile/CalendarWalker";
import ToggleButton from "../../components/profilesComponents/componetsWalkerProfile/ToggleButton";
import HeaderProfile from "../../components/profilesComponents/HeaderProfile";
import ReservationForm from "../../components/reservations/ReservetionForm";

const WalkerProfile = () => {
  return (
    <div className="container">
      <header className="headerLogin">
        <HeaderMenu buttonTo="" />
      </header>
      <div className="container containerProfile">
        <HeaderProfile />
        <h2>Perfil Walker</h2>
        <ToggleButton />
        <br />
        <ReservationForm />
        <br />
        <CalendarWalker />
      </div>
    </div>
  );
};

export default WalkerProfile;
