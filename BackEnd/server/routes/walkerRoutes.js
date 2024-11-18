module.exports = (app) => {
  const walkerController = require("../controllers/walkerController");

  // Ruta para actualizar disponibilidad del paseador
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
};
