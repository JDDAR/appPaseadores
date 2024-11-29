const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { registrerOwnerData } = require("./ownerControllers");
const { registerWalkerData } = require("./walkerController");
const User = require("../models/modelUsers");
const modelWalker = require("../models/modelWalker");

//CREANDO USUARIO
exports.registerUser = async (req, res) => {
  console.log("Invocando registerUser");
  try {
    const { userDataGeneral, petData, walkerData } = req.body;

    //Hasheando la cpontraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      userDataGeneral.passwordUser,
      saltRounds,
    );

    var newUser = new User({
      name: userDataGeneral.nameUser,
      telephone: userDataGeneral.telUser,
      address: userDataGeneral.addressUser,
      email: userDataGeneral.emailUser,
      password: hashedPassword, // Guardando la contraseña hasheada
      role: userDataGeneral.role,
    });

    const savedUser = await newUser.save();

    switch (userDataGeneral.role) {
      case "owner":
        await registrerOwnerData(savedUser._id, petData);
        break;
      case "walker":
        await registerWalkerData(savedUser._id, walkerData);
        break;
      default:
        break;
    }

    res.send({
      msg: "OK",
      info: "Usuario creado exitosamente",
      userId: savedUser.id,
    });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "ERROR", info: "Error creando usuario" + error });
  }
};

//LOGIN ---manejando el inicio de sesion
exports.loginUser = async (req, res) => {
  console.log("Invocando LoginUser");

  try {
    const { email, password } = req.body;

    //buscar usuario en la vase de datos}
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        msg: "ERROR",
        info: "Usuario no encontrado",
      });
    }

    //Verificando la contraseña}
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        msg: "ERROR",
        info: "contraseña incorrecta ",
      });
    }

    //Devolviendo datos del usuario
    const userData = {
      userId: user._id,
      nameUser: user.name,
      email: user.email,
      role: user.role,
      profileImage: user.profileImage || null,
      telephone: user.telephone,
      address: user.address,
    };

    //Enviando los datos al cliente
    res.send({
      msg: "OK",
      info: "Inicio de sesion exitoso",
      userData,
    });
  } catch (error) {
    res.status(500).send({
      msg: "ERROR",
      info: "Error en el servidor: " + error.message,
    });
  }
};
