import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { clearUserData } from "../../redux/slices/userSlice";

const HeaderMenu = (props) => {
  const dispatch = useDispatch();

  //Obtengo los datos del usuario desde el estado
  const userData = useSelector((state) => state.register.userData);
  //console.log(userData.userDataGeneral.nameUser);
  // Uso para evitar errores
  const userName = userData?.userDataGeneral?.nameUser || "Invitado"; //funcion para obtener la inicial del nombre
  const initialName = (name) => {
    if (name) {
      const nameLetra = name.split(" ");
      return nameLetra
        .map((part) => part[0])
        .join("")
        .toUpperCase();
    }
    return "";
  };

  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.removeItem("userData"); // limpiando el localstorage
    window.location.reload();
    Navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="NavMenu">
          <nav className="NavMenu__navLinks">
            <NavLink className="NavMenu__logo" to={"/"}>
              MiPerro
            </NavLink>
            <NavLink>Nosotros</NavLink>
            <NavLink>Servicio</NavLink>
            <NavLink>Servicio</NavLink>
          </nav>

          {userData && userData.userId ? (
            <div className="userProfileHeader">
              {/*Mostrando imagen si está disponible */}
              {userData.profileImage ? (
                <img
                  src={userData.profileImage}
                  alt="Avatar usuario"
                  className="userProfileHeader__img"
                />
              ) : (
                <div className="userProfileHeader__letters">
                  {initialName(userName)}
                </div>
              )}
              <div className="modalHeader">
                <span className="userProfileHeader__name">{userName}</span>
                <NavLink to="/" className="logoutButton" onClick={handleLogout}>
                  Cerrar sesión
                </NavLink>
              </div>
            </div>
          ) : (
            <NavLink to={props.buttonTo}>Iniciar Sesión</NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
