var express = require("express");
var app = express();

//static files setup
app.use(express.static("public"));

//view engine setup
app.set("views", "views");
app.set("view engine", "ejs");


app.get('/', function (req, res) {
    res.render("web/index");
});


app.listen(80, function () {
    console.log("Server listening on port: 80 ...")
})