var express = require("express");
var sockio = require("socket.io");
var cors = require("cors")

var app = express();

// enable cors for everyone
app.use(cors());

// serve static files from the "public" directory
app.use(express.static('public'));

// start the app on port specified
var portNum = 8890;
var io = sockio.listen(app.listen(portNum), {log: true});
console.log("NodeJS SocketIO Server started on port " + portNum);
