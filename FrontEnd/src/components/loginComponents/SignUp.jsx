import React from "react";
import { LuSmilePlus } from "react-icons/lu";
import { MdPets } from "react-icons/md";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setStepLogin } from "../../redux/slices/registerSlice";
import { NavLink } from "react-router-dom";

const SingUp = () => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(setStepLogin("signin"));
  };

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
          <span onClick={handleSignIn}> Iniciar sesión</span>
        </p>
      </main>
    </>
  );
};
export default SingUp;
