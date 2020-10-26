var db = require("../models");

module.exports = function(app) {
  app.get("/stats", function(request, response) {
    db.Workout.find({}).then(function(dbWorkout) {
      response.json(dbWorkout);
    })
    .catch(function(error) {
      response.json(error)
    });
  });
}

app.get("/exercise")