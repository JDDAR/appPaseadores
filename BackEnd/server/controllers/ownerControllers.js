var User = require("../models/modelOwner");

exports.getAllOwner = (req, res, next) => {
  res.end(
    "<html> <head><title>Dueños mascotas</title></head><body> Get </br> ** nombre : " +
      req.query.nombre +
      " ** Horario: " +
      req.query.horario +
      " </body></html>",
  );
};

exports.getParametrosPost = (req, res, next) => {
  res.end(
    "<html> <head><title>Dueños mascotas</title></head><body> POST </br> ** nombre : " +
      req.body.nombre +
      " ** Horario: " +
      req.body.horario +
      " </body></html>",
  );
};

exports.ownersUsers = (req, res) => {
  if (req.query.id === "123") {
    var userO = {
      id: "123",
      nombre: "Jose",
    };
    res.send(userO);
  } else {
    res.statuscode = 404;
    res.end(
      "<html> <head><title>Usuario</title></head><body> con  </br> usuario con id :" +
        req.body.id +
        " no existe  </body></html>",
    );
  }
};

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
  }
};

//CREANDO USUARIO
exports.registerUser = function (req, res) {
  try {
    var newUser = new User({
      name: req.body.nameUser,
      telephone: req.body.telUser,
      address: req.body.addressUser,
      email: req.body.emailUser,
      password: req.body.passwordUser,
    });
    newUser
      .save()
      .then(() => {
        res.send({ msg: "OK", info: "Paseador creado exitosamente" });
      })
      .catch((err) => {
        res.send({ msg: "ERROR", info: "Creando el usuario " + err });
      });
  } catch (error) {
    console.log("Error en la creacion del usuario : " + error);
  }
};
