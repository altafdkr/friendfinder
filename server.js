// Require Express and Body Parser
var express = require("express");
var bodyParser = require("body-parser");

// Initialize express
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Start Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });