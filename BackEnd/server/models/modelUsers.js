const { default: mongoose } = require("mongoose");

var Shema = mongoose.Schema;

var shemaUser = new Shema({
  name: { type: String, Require: "Nombre es obligatorio" },
  telephone: { type: String, Require: "Telefono es obligatorio" },
  address: { type: String, Require: "Direccion es obligatoria" },
  email: { type: String, Require: "Correo es obligatorio" },
  password: { type: String, Require: "Password es obligatorio" },
  role: {
    type: String,
    enum: ["admin", "walker", "owner"],
    Require: "El rol es obligatorio",
  },
  profileImage: { type: String, default: "" },
});

module.exports = mongoose.model("User", shemaUser);
