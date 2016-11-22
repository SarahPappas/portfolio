var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var sass = require("node-sass");
var Promise = require("bluebird");

var app = express();
var server = app.listen(process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended:false}));
// app.use(
// 	sass.middleware({
// 		src: __dirname + "/sass",
// 		dest: __dirname + "/public",
// 		debug: true
// 	})
// );

app.use(express.static("public"));

// Home routes
app.get("/", function(req, res) {
	res.render("home");
});