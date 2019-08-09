var express = require("express");
var app = express();
var PORT = 8080;

//use this tomorrow
// var PORT = process.env.PORT || 8080;



//so your stuff can interpret the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  