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
