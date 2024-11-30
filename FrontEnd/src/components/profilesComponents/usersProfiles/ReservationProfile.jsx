import React, { useEffect, useState } from "react";
import axioInstance from "../../../api/axioInstance";

const ReservationProfile = ({ userId, role }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        let endpoint = `/api/reservations/${userId}`;
        if (role === "walker") {
          // Cambiar el endpoint si es un paseador
          endpoint = `/api/walkerReservations/${userId}`;
        }

        const response = await axioInstance.get(endpoint);
        setReservations(response.data.reservations);
        console.log(response.data.reservations);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [userId, role]);

  if (loading) {
    return <p>Cargando reservas...</p>;
  }

  return (
    <div className="containerReservation">
      <h2>{role === "walker" ? "Mis Asignaciones" : "Mis Reservas"}</h2>
      {reservations.length === 0 ? (
        <p>No tienes reservas aún.</p>
      ) : (
        <ul className="containerReservation__listReservation">
          {reservations.map((reservation) => (
            <li key={reservation._id}>
              <h3>
                Reserva para {reservation.selectedPet?.name}{" "}
                {role === "walker" && `(Cliente: ${reservation.userId?.name})`}
              </h3>
              <p>
                Fecha: {new Date(reservation.date).toLocaleDateString()} <br />
                Hora: {reservation.startTime} - {reservation.endTime} <br />
                Observaciones: {reservation.observations}
              </p>
              {role === "user" && (
                <p>
                  Paseador asignado: {reservation.walkerId?.name} <br />
                  Contacto: {reservation.walkerId?.email} <br />
                  Email: {reservation.walkerId?.email}
                </p>
              )}
              {role === "walker" && (
                <p>
                  Cliente: {reservation.userId?.name} <br />
                  Contacto: {reservation.userId?.phone} <br />
                  Email: {reservation.userId?.email}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationProfile;
