const mongoose = require("mongoose");
const { registrerOwnerData } = require("./ownerControllers");
const User = require("../models/modelUsers");

//CREANDO USUARIO
exports.registerUser = async (req, res) => {
  console.log("Invocando registerUser");
  try {
    const { ownerData, petData } = req.body;

    var newUser = new User({
      name: ownerData.nameUser,
      telephone: ownerData.telUser,
      address: ownerData.addressUser,
      email: ownerData.emailUser,
      password: ownerData.passwordUser,
      role: ownerData.role,
    });

    const savedUser = await newUser.save();

    //Verifico el rol del usuario
    if (ownerData.role === "owner") {
      //Registro los datos del dueño y mascota
      await registrerOwnerData(savedUser._id, petData);
    }

    res.send({ msg: "OK", info: "Usuario creado exitosamente" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "ERROR", info: "Error creando usuario" + error });
  }
};
