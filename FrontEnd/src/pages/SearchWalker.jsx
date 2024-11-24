import React, { useEffect } from "react";
import HeaderMenu from "../components/header/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalkers } from "../redux/slices/walkerSlice";
import { openModal } from "../redux/slices/modalSlice";
import ReservationForm from "../components/reservations/ReservetionForm";
//import { clearUserData } from "../redux/slices/registrationSlice";

const SeachWalker = () => {
  const dispatch = useDispatch();
  const walkers = useSelector((state) => state.walker.walkers);
  const isLoggedIn = useSelector((state) => state.register.isAuthenticated);
  const loading = useSelector((state) => state.walker.loading);
  const error = useSelector((state) => state.walker.error);
  const userId = useSelector((state) => state.register.userData.userId);

  //const userid = userData?.userDataGeneral?.id || userData.id;
  console.log("estado usuario :", isLoggedIn, "id", userId);
  useEffect(() => {
    dispatch(fetchWalkers());
  }, [dispatch]);

  const handleReserve = (walkerId) => {
    if (isLoggedIn) {
      dispatch(
        openModal({
          modalContent: "RESERVATION_FORM",
          modalProps: { walker: walkerId, userId: userId },
        }),
      );
    } else {
      dispatch(
        openModal({
          modalContent: null,
          modalProps: { message: "Para reservar debe iniciar sesión" },
        }),
      );
    }
  };

  return (
    <>
      <div className="container">
        <header className="headerLogin">
          <HeaderMenu buttonTo="" />
        </header>
        <div className="container containerContent">
          <h2>Buscar Paseadores</h2>
          {loading && <p>Cargando paseadores...</p>}
          {error && <p>Error al cargar paseadores: {error}</p>}
          <div className="walkerList">
            {walkers.map((walker) => (
              <div key={walker.id} className="walkerCard">
                <div className="walkerCard__img">
                  <img
                    src={walker.paseadorImage}
                    alt={walker.name}
                    className="walkerImage"
                  />
                </div>
                <div className="walkerCard__info">
                  <h3>{walker.userId.name}</h3>
                  <p>Localidad: {walker.localidad}</p>
                  <p>Barrio: {walker.barrioName}</p>
                  <p>Tarifa: {walker.tarifaHora} por hora</p>
                  <p>
                    Disponibilidad:
                    {walker.isAvailable ? "Disponible" : "No disponible"}
                  </p>
                  <button
                    className="button-secondary"
                    onClick={() => handleReserve(walker.userId)}
                    disabled={!walker.isAvailable}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SeachWalker;
