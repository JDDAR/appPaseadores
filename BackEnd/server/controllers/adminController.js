const mongoose = require("mongoose");

// Consulta de Usuarios
exports.getAllUsers = function (req, res) {
  try {
    User.find({})
      .then((rta) => {
        console.log("Respuesta del servidor base de datos : " + rta);
        res.send({ msg: "ok", info: rta });
      })
      .catch((err) => {
        console.log("Error: " + err);
        res.send({ msg: "ERROR: ", info: "Informacion no disponible" });
      });
  } catch (err) {
    console.log("ERROR: consultando usuarios : " + err);
    throw err;
  }
};
