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
