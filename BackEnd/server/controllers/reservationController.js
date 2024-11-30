const Reservation = require("../models/modalReservation");

//Endpoint Crear reservaci ón
exports.createReservation = async (req, res) => {
  try {
    const {
      date,
      startTime,
      endTime,
      selectedPet,
      observations,
      userId,
      walkerId,
    } = req.body;

    const newReservation = new Reservation({
      date,
      startTime,
      endTime,
      selectedPet,
      observations,
      userId,
      walkerId,
    });

    await newReservation.save();

    res.status(201).json({
      success: true,
      message: "Reserva creada con exito",
      reservation: newReservation,
    });
  } catch (error) {
    console.log("ERROR : al crear la reserva ", error);
    res.status(500).json({
      success: false,
      message: "Ocurrio un error al crear la reserva. ",
    });
  }
};

//Obteniendo los datos para las reservas realizadas :

exports.getReservations = async (req, res) => {
  const { userId } = req.params;

  try {
    // Buscar reservas del usuario y poblar información relacionada
    const reservations = await Reservation.find({ userId })
      .populate("selectedPet", "name type age") // Poblar información de la mascota
      .populate("walkerId", "name telephone email") // Poblar información del paseador
      .exec();

    if (!reservations || reservations.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron reservas para este usuario.",
      });
    }

    res.status(200).json({
      success: true,
      reservations,
    });
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al obtener las reservas.",
    });
  }
};

// Obtener reservas asociadas a un paseador
exports.getReservationsWalker = async (req, res) => {
  const { walkerId } = req.params;

  try {
    const reservations = await Reservation.find({ walkerId })
      .populate("selectedPet", "name type age")
      .populate("userId", "name phone email") // Poblar información del dueño
      .exec();

    if (!reservations || reservations.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron reservas para este paseador.",
      });
    }

    res.status(200).json({
      success: true,
      reservations,
    });
  } catch (error) {
    console.error("Error al obtener reservas del paseador:", error);
    res.status(500).json({
      success: false,
      message: "Ocurrió un error al obtener las reservas del paseador.",
    });
  }
};
