const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//const { Workout } = require("./models");
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


app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});










app.get("/api/workouts", function (request, response) {
  db.Workout.find({})
    .then(function (dbWorkout) {
      response.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch(function (error) {
      response.json(error)
    });
});

app.get("/api/workouts/range", function (request, response) {
  db.Workout.find(request.body).then(function (dbRange) {
    response.json(dbRange);
    console.log(dbRange);
  });
});



app.post("/api/workouts", function (request, response) {
  db.Workout.create(request.body)
    .then(function (dbData) {
      response.json(dbData);
      console.log(dbData);
    })
    .catch(function (error) {
      response.json(error);
    });
});

app.put("/api/workouts/id:", function (request, response) {
  const { id } = request.params;
  db.Workout.updateOne({ _id: id },
    { push: { exercises: request.body } })
    .then(function (dbWorkout) {
      response.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch(function (error) {
      response.json(error);
    });
});




