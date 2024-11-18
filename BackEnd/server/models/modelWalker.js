const mongoose = require("mongoose");

const walkerShema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },

  tipoIdent: { type: String, require: true },
  numberIdent: { type: String, require: true },
  paseadorImage: { type: String, require: true },
  tarifaHora: { type: String, require: true },
  localidad: { type: String, require: true },
  barrioName: { type: String, require: true },
  isAvailable: { type: Boolean, default: false },
});

module.exports = mongoose.model("Walker", walkerShema);
