const mongoose = require("mongoose");

const ownerShema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
});

module.exports = mongoose.model("Owner", ownerShema);
