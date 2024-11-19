import React from "react";
import { NavLink } from "react-router-dom";
import HeaderMenu from "../components/header/HeaderMenu";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <div className="containerHome__content">
          <HeaderMenu buttonTo="/login" />
        </div>

        <div className="containerHome__homeInfo">
          <h2>Encuentra al paseador que necesitas </h2>
          <NavLink to="/searchWalker" className="button-primary">
            Buscar Paseador
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
