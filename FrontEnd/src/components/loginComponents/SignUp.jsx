import React from "react";
import { LuSmilePlus } from "react-icons/lu";
import { MdPets } from "react-icons/md";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const SingUp = () => {
  const setStep = useSelector((state) => state.register.step);
  return (
    <>
      <main>
        <h2>Registrarse</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
          maecenas magna a sociis massa,
        </p>
        <div className="cardForm">
          <div className="buttonsRegistro">
            <NavLink to="/login/registroDueño" className="buttonRegistro">
              <LuSmilePlus className="iconButton" />
              Soy dueño
            </NavLink>
            <NavLink to="/login/registroPaseador" className="buttonRegistro">
              <MdPets className="iconButton" />
              Soy Paseador
            </NavLink>
          </div>
        </div>
        <p className="footerLogin">
          ¿ Tiene una cuenta ?
          <span onClick={() => setStep("signin")}> Iniciar sesión</span>
        </p>
      </main>
    </>
  );
};
export default SingUp;
