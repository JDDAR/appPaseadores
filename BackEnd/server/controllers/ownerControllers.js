const Owner = require("../models/modelOwner");
const Pet = require("../models/modelPet");

//Registrando usuario nuevo y relacion entre el dueño y la mascota
exports.registrerOwnerData = async (userId, petData) => {
  try {
    //Creando el documento del dueño
    const newOner = new Owner({
      userId: userId,
      pets: [],
    });
    //guardando datos
    const savedOwner = await newOner.save();

    //Creando el documento de la mascota asociandolo al dueño
    const newPet = new Pet({
      ownerId: savedOwner._id,
      name: petData.petName,
      breed: petData.petBreed,
      age: petData.petAge,
      image: petData.petImage,
      recommendations: petData.petRecommendations,
      sex: petData.petSex,
    });

    //Guardando mascota
    const savedPet = await newPet.save();

    //Añadimos el id de la mascota al array
    savedOwner.pets.push(savedPet._id);
    //guardamos el dueño con la nueva mascota
    await savedOwner.save();

    console.log("Datos del dueño y la mascota guardado exitosamente");
  } catch (error) {
    console.log("ERROR: al guardar al dueño y mascota " + error);
    throw error;
  }
};

///Obteniendo las mascotas asociadas a un dueño
exports.getOwnerPets = async (req, res) => {
  try {
    const { userId } = req.params;
    const owner = await Owner.findOne({ userId }).populate("pets");

    if (!owner) {
      return res.status(404).send({
        msg: "ERROR",
        info: "Dueño no encontrado",
      });
    }

    res.send({
      msg: "OK",
      info: "Mascotas obtenidas exitosamente",
      pets: owner.pets,
    });
  } catch (error) {
    console.log("Error al obtener mascotas: ", error);
    res.status(500).send({
      msg: "ERROR",
      info: "error a obtener mascotas : " + error.message,
    });
  }
};
