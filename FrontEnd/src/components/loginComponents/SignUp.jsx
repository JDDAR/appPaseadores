import React from "react";
import { LuSmilePlus } from "react-icons/lu";
import { MdPets } from "react-icons/md";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

const SingUp = () => {
  let { setStep } = useContext(AuthContext);

  return (
    <>
      <main>
        <h2>Registrarse</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
          maecenas magna a sociis massa,
        </p>
        <div className="cardForm">
          <div class="buttonsRegistro">
            <NavLink to="/login/registroDueño" className="buttonRegistro">
              <LuSmilePlus className="iconButton" />
              Soy dueño
            </NavLink>{" "}
            <NavLink className="buttonRegistro">
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
