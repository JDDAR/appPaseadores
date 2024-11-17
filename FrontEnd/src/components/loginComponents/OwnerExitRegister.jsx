import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserData } from "../../redux/slices/userSlice";

import { LuCheck } from "react-icons/lu";
import { useEffect } from "react";

const OwnerExitRegister = () => {
  var userData = useSelector((state) => state.register.userData);
  const dispatch = useDispatch();

  //
  useEffect(() => {
    if (userData && userData.userId) {
      console.log("UserID disponible : ", userData.userId);
    } else {
      console.error("UstedId no disponible");
    }
  }, [userData]); // Este efecto se ejecutará cada vez que userData cambio

  const handleViewProfile = () => {
    if (userData && userData.userId) {
      dispatch(setUserData(userData.userId));
      console.log(userData);
    } else {
      console.error("El estado de userData no está dipponible");
    }
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
            onClick={handleViewProfile}
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
