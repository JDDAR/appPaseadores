module.exports = (app) => {
  //Importamos el controlador
  var ownerController = require("../controllers/ownerControllers");
  app
    .route("/api/owner")
    .get(ownerController.getAllOwner)
    .post(ownerController.getParametrosPost);
};
