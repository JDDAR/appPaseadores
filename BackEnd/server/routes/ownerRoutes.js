module.exports = (app) => {
  //Importamos el controlador
  var ownerController = require("../controllers/ownerControllers");
  app
    .route("/api/owner")
    .get(ownerController.getAllOwner)
    .post(ownerController.getParametrosPost);

  app.route("/api/ownersUsers").get(ownerController.getAllUsers);
  app.route("/api/createUser").post(ownerController.registerUser);
};
