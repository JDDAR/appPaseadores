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
