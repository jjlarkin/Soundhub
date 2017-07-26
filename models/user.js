var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  teamName: {
    type: String,
    trim: true,
    required: "Team Name is Required"
  },

  score : {
  	type : Number
  }

});



var User = mongoose.model("User", UserSchema);
module.exports = User;


