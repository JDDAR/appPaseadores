import React, { useEffect } from "react";
import HeaderMenu from "../components/header/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalkers } from "../redux/slices/walkerSlice";
import { useNavigate } from "react-router-dom";

const SeachWalker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const walkers = useSelector((state) => state.walker.walkers);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const loading = useSelector((state) => state.walker.loading);
  const error = useSelector((state) => state.walker.error);

  useEffect(() => {
    dispatch(fetchWalkers());
  }, [dispatch]);

  const handleReserve = (walkerId) => {
    if (isLoggedIn) {
      navigate(`/reserve/${walkerId}`);
    } else {
      alert("Debes iniciar sesión para realizar una reserva.");
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
                    onClick={() => handleReserve(walker.id)}
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
