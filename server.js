// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");

// Require User Schema
var User = require("./models/user");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------



// mongoose.connect("mongodb://heroku_mlzrwpsv:heroku_mlzrwpsv123@ds119223.mlab.com:19223/heroku_mlzrwpsv");
// mongoose.connect("mongodb://localhost/soundgame");
// let db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


//Database Config with mongoose
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/soundgame');
}

let db = mongoose.connection;

//Handle Database(mongoose) errors
db.on('error', (error) => console.log('Mongoose Error:', error));

//If successfully connected to db through mongoose.
db.on('open', () => console.log('Mongoose connection has been successful!'));

// -------------------------------------------------

// Dummy DATA================================================
    var exampleUser = new User({
      teamName: "Ernest",
      score : 20
    });
    // Using the save method in mongoose, we create our example user in the db
    exampleUser.save(function(error, doc) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Or log the doc
      else {
        console.log(doc);
      }
    });

//End of Dummy Data======================================================


// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  User.find({}).sort([
    ["score", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.teamName);

  User.create({
    teamName: req.body.teamName,
    score: 0
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Team Created")
    }
  });
});


app.post("/api/score", function(req, res) {
  console.log("BODY: " + req.body.score);

var query = {'teamName':req.user.teamName};

User.findOneAndUpdate(query, {$set:{score: req.body.score}}, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
});   

});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
