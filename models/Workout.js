
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  date: { type: Date, },
  type: { type: String },
  name: { type: String, unique: true },
  weight: { type: Number },
  reps: { type: Number },
  sets: { type: Number },
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;