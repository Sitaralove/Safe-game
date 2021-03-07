var express = require("express");

// create our app
var app = express();

// start listening for requests
var server = app.listen(process.env.PORT || 9000, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// run this function if the end path matches /clients
app.get('/clients', function(req, res) {


  var data={
    "count": 2,
    "agency_id": 1,
    "clients": [
      {
        "id": 1,
        "name": "chance",
        "age": 52,
        "registered": false,
        "DOB": "12/06/1982",
      },
      {
        "id": 2,
        "name": "Sitara",
        "age": 30,
        "registered": true,
        "DOB": "10/06/1982",
      }
    ]
  }

var myjson = JSON.stringify(data)
res.send(myjson)
});
  //res.send('this might return the some client data to your mobile app')

app.get('/status', function(req, res) {
    //res.send('This will return RAG data fetched from a database')
var data={
  "count": 2,
    "agency_id": 1,
    "status": [
      {
        "id": 1,
        "RAG": "Green",
        "time": 2000,
        "Date": "25/10/2020",
      },
      {
        "id": 2,
        "RAG": "Red",
        "time": 1200,
        "Date": "26/10/2020",
      }
    ]
  }

var myjson = JSON.stringify(data)
res.send(myjson)
});
    
  //new end point called status need to return some JSON 