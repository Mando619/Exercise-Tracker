const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const { Workout } = require("./models");
const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//require("./routes/api.")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});






// db.Workout.create({ excersises: "Burpees" })
//   .then(function(newWorkout)  {
//     console.log(newWorkout);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });







app.get("/api/workouts", function(request, response) {
  db.Workout.find({})
  .then(function(dbWorkout) {
    response.json(dbWorkout);
    console.log(dbWorkout);
  })
  .catch(function(error) {
    response.json(error)
  });
});

app.get("/api/workouts/range", function(request, response) { 
  db.Workout.find({}).then(function(dbRange) {
    response.json(dbRange);
    console.log(dbRange);
  });
});

app.get("/public/exercise", function(request, response) { 
  db.Workout.find({}).then(function(dbRange) {
    response.json(dbRange);
    console.log(dbRange);
  });
});


// app.post("/api/workouts/:id", ({ body }, response) => {
//   db.Workout.create(body)
//     .then(function(data) {
//       db.Workout.findOneAndUpdate({ _id: body.params.id},
//         { push: { exercises: data._id}},
//         {$inc: { totalDuration: data.duration}},
//         {new : true})
//       })
//     .then(function(dbWorkout) {
//       response.json(dbWorkout);
//     })
//     .catch(function(error) {
//       response.json(error);
//     });
// });

