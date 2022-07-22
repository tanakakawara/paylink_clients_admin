const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("website/landing");
});

app.get("/test", (req, res) => {
  res.render("test");
});

// routes
const app_routes = require("./routes/app_routes");
app.use("", app_routes);

app.listen(3000);
