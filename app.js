var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
app = express();

mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true
});

app.use(bodyParser.json());

app.use("/", require("./router"));

app.listen(8000,function (){
  console.info(`http://localhost:8000/`);
});
