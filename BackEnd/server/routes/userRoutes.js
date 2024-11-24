module.exports = (app) => {
  const ownerController = require("../controllers/ownerControllers");
  const authController = require("../controllers/authController");
  const adminController = require("../controllers/adminController");
  const walkerController = require("../controllers/walkerController");
  const reservationController = require("../controllers/reservationController");

  app.route("/api/ownersUsers").get(adminController.getAllUsers);

  // Ruta para registro de usuario
  app.route("/api/createUser").post(authController.registerUser);

  //Ruta para el login
  app.route("/api/login").post(authController.loginUser);

  // Rutas de paseadores
  app.put("/api/updateAvailability/:userId", async (req, res) => {
    const { userId } = req.params;
    const { isAvailable } = req.body;

    try {
      const updatedWalker = await walkerController.updateAvailability(
        userId,
        isAvailable,
      );
      res.status(200).json({
        msg: "Estado de disponibilidad actualizado con éxito",
        data: updatedWalker,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Error al actualizar disponibilidad",
        info: error.message,
      });
    }
  });

  //Ruta para obtener mascotas
  app.route("/api/:userId/pets").get(ownerController.getOwnerPets);

  //Rutas de RESERVAS :
  app.route("/api/reservation").post(reservationController.createReservation);
};
