var express = require("express");
var path = require("path");
var bodyParcer = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: true}));
app.use(bodyParcer.text());
app.use(bodyParcer.json({ type: "application/vnd.api+json" }));
 
app.use(express.static("app/public"));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });