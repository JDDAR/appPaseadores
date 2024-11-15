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
