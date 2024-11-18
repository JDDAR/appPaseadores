import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearUserData } from "../../redux/slices/userSlice";

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Estado local para el manejo del menu desplegable
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Obtengo los datos del usuario desde el estado
  const userData = useSelector((state) => state.register.userData);
  //console.log(userData.userDataGeneral.nameUser);
  // validacion : Uso para evitar errores
  const userName = userData?.userDataGeneral?.nameUser || userData.nameUser;
  const userRole = userData?.userDataGeneral?.role || userData.role;

  //Obtengo la inicial del nombre
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

  //Funcion para el manejo del estado del menu desplegable
  const profileClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Funcion para redireccionar al perfil de cada usuario segun el rol

  const handleToPerfil = () => {
    switch (userRole) {
      case "owner":
        navigate("/ownerProfile");
        break;
      case "walker":
        navigate("/walkerProfile");
        break;
      case "admin":
        navigate("/adminProfile");
        break;
      default:
        navigate("/");
        break;
    }
    setIsMenuOpen(false);
  };

  //Manejando el cierre de sesion
  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.removeItem("userData"); // limpiando el localstorage
    navigate("/");
    window.location.reload();
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
                  onClick={profileClick}
                />
              ) : (
                <div
                  onClick={profileClick}
                  className="userProfileHeader__letters"
                >
                  {initialName(userName)}
                </div>
              )}
              {isMenuOpen && (
                <div className="modalHeader">
                  <span className="userProfileHeader__name">{userName}</span>
                  <button className="buttonRutes" onClick={handleToPerfil}>
                    {" "}
                    Ver Perfil{" "}
                  </button>
                  <NavLink
                    to="/"
                    className="buttonRutes"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <NavLink className="button-primary" to="/login">
              Iniciar Sesión
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
