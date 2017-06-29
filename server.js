var http = require("http"); //built in node mobdule, lets us transfer data over HTTP
var express = require("express"); //node module

/*
req Object containing info from HTTP request
 res Sends back HTTP response
   */

//sets express function to variable app.
var app = express();

//Body parser extracts the entire portion of an incoming request (our form) and exposes it to req.body. Form will display undefined without it
app.use(express.bodyParser());

//Expres waits for a request to / and when it gets one, it responds with a file, index.html
app.get("/", function(req, res) {
  res.sendfile("./index.html")
});

//Post is a request method, part of HTTP, sends data to our server(express). Type of body request is form the <form action="/" method="POST">
app.post("/", function(req, res) {
  var message = req.body.message; //getting the name="message" input tag value from index.html
  if (message == "") {
    res.send("Error, empty form") //responds with error if no value in message
  } else {
    res.send("The message is: " + message); //respond with message value
  }
});

//creates our express server on port 8000
http.createServer(app).listen(8000);
