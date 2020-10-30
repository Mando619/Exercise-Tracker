
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  day: Date.now(),
  //exercises: Array
  exercises : [{
    typeOf: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
  }]
});

const Workout = mongoose.model("Workout", WorkOutSchema);

module.exports = Workout;