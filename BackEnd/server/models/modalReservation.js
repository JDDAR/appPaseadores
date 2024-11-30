const mongoose = require("mongoose");

const reservationShema = new mongoose.Schema(
  {
    date: { type: Date, require: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    selectedPet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    observations: { type: String, required: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    walkerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Reservation", reservationShema);
