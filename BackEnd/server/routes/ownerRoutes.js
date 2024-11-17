module.exports = (app) => {
  const ownerController = require("../controllers/ownerControllers");
  const authController = require("../controllers/authController");
  const adminController = require("../controllers/adminController");

  app.route("/api/ownersUsers").get(adminController.getAllUsers);

  // Ruta para registro de usuario
  app.route("/api/createUser").post(authController.registerUser);

  //Ruta para el login
  app.route("/api/login").post(authController.loginUser);
};
