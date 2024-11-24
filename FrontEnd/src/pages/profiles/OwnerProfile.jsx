import React from "react";
import HeaderMenu from "../../components/header/HeaderMenu";
import HeaderProfile from "../../components/profilesComponents/HeaderProfile";

const OwnerProfile = () => {
  return (
    <div className="container">
      <header className="headerLogin">
        <HeaderMenu buttonTo="" />
      </header>
      <div className="container containerContent">
        <HeaderProfile />
      </div>
    </div>
  );
};

export default OwnerProfile;
