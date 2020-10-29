
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day:  Date,
  //exercises: Array
  exercises : [{
    typeOf: String,
    name: String, 
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;