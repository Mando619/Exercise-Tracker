var db = require("../models");

module.exports = function(app) {
  app.get("/api/", function(req, res) {
    db.Workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
}