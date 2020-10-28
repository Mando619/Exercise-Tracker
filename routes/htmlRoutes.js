var path = require("path");

module.exports = function(app) {
  
    app.get("/index", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    app.get("/exercise", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/stats", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  };
  