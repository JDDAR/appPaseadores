const Walker = require("../models/modelWalker");

//Registro del paseador
exports.registerWalkerData = async (userId, walkerData) => {
  try {
    const newWalker = new Walker({
      userId: userId,
      tipoIdent: walkerData.tipoIdent,
      numberIdent: walkerData.numberIdent,
      paseadorImage: walkerData.paseadorImage,
      tarifaHora: walkerData.tarifaHora,
      localidad: walkerData.localidad,
      barrioName: walkerData.barrioName,
    });

    await newWalker.save();
    console.log("El paseador se ha guardado con exito ");
  } catch (error) {
    console.log("ERROR: Al crear ael paseador " + error);
    throw error;
  }
};

// Controlador para actualizar disponibilidad
exports.updateAvailability = async (userId, isAvailable) => {
  try {
    const updatedWalker = await Walker.findOneAndUpdate(
      { userId: userId },
      { isAvailable: isAvailable },
      { new: true },
    );
    if (!updatedWalker) {
      throw new Error("Paseador no encontrado");
    }
    return updatedWalker;
  } catch (error) {
    console.error("Error en updateAvailability:", error);
    throw error;
  }
};
