
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day: { type: Date, },
  excersises : [{
    type:  String,
    name: String, required: true,
    duration: Number,
    weight: Number ,
    reps: Number ,
    sets: Number ,
  }]
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;