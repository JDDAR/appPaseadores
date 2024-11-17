import React from "react";

import { LuCheck } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserData } from "../../redux/slices/userSlice";

const OwnerExitRegister = ({ userData }) => {
  const dispatch = useDispatch();

  console.log("Datos de userData en OwnerExitRegister:", userData);

  if (!userData || !userData.userId) {
    console.error("userId no está definido en el contexto");
    return <p>Error al cargar los datos del usuario.</p>;
  }

  //Funcion boton ver perfil
  const hadleViewProfile = () => {
    //guardando los datos del usuario en redux
    dispatch(setUserData(userData));
  };

  return (
    <main className="mainOwner">
      <h3>Registro Exitoso</h3>
      <header>
        <button className="buttonSelect">1</button> <hr />
        <button className="buttonSelect">2</button> <hr />
        <button className="buttonSelect">
          <LuCheck />
        </button>
      </header>
      <div className="cardExit">
        <div>
          <h3>¡ Te has registrado con exito !</h3>
          <p>Gracias por hacer parte de esta comunidad</p>
        </div>
        <div className="cardExit__buttons">
          <NavLink
            to={`/profile/${userData.userId}`}
            onClick={hadleViewProfile}
          >
            Ver perfil
          </NavLink>
          <NavLink>Buscar Paseador</NavLink>
        </div>
      </div>
    </main>
  );
};

export default OwnerExitRegister;
