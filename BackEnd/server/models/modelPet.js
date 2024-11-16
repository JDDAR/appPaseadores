const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    required: true,
  },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  image: { type: String },
  recommendations: { type: String },
  sex: { type: String, required: true },
});

module.exports = mongoose.model("Pet", petSchema);
