var mongoose = require("mongoose");
// var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },

  score : {
  	type : Number
  },

  totalWins : {
    type : Number
  },

    totalLosses : {
    type : Number
  }


});

var User = mongoose.model("User", UserSchema);
module.exports = User;








// Create the Schema class
// var Schema = mongoose.Schema;

// // Instantiate a new Schema, UserSchema
// var UserSchema = new Schema({
//   // username: a required, trimmed string
//   username: {
//     type: String,
//     trim: true,
//     required: "Username is Required"
//   },
//   // password: a required, trimmed string that's 6 characters or longer
//   password: {
//     type: String,
//     trim: true,
//     required: "Password is Required",
//     validate: [
//       function(input) {
//         return input.length >= 6;
//       },
//       "Password should be longer."
//     ]
//   },
//   // email: a string that's checked with regex to ensure it's in the expected format
//   email: {
//     type: String,
//     unique: true,
//     match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
//   },

//   playList : {
//  	type : Array
//   }
 
//  });


// // Pass the schema to the User model
// var User = mongoose.model("User", UserSchema);

// // Export the User model
// module.exports = User;