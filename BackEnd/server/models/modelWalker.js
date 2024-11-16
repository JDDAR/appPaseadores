const mongoose = require("mongoose");

const walkerShema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
});

module.exports = mongoose.model("Walker", walkerShema);
