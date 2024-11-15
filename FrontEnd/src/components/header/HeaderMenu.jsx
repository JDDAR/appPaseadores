import React from "react";
import { NavLink } from "react-router-dom";

const HeaderMenu = (props) => {
  return (
    <>
      <div className="container">
        <div className="NavMenu">
          <nav className="NavMenu__navLinks">
            <NavLink className="NavMenu__logo" to={"/"}>
              MiPerro
            </NavLink>
            <a>Nosotros</a>
            <a>Servicio</a>
            <a>Servicio</a>
          </nav>
          <NavLink to={props.buttonTo}>Iniciar Sesión</NavLink>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
