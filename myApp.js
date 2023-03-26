let express = require('express');
let app = express();

console.log("Hello World");

/*
function respond(req, res) {
  res.send("Hello Express");
}

app.get("/", respond);




function respond(req, res) {
  res.sendFile(__dirname + "/views/index.html");
}

app.get("/", respond);
app.use("/public", express.static(__dirname + "/public"));
*/


function respondJSON(req, res) {
  res.json({"message": "Hello json"});
}

app.get("/json", respondJSON);














 module.exports = app;
