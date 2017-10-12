const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({

  email: {
  type: String
},
  username: {
  type: String
},
password : {
type: String
},

description: {
type: String
},

profession: {
  type: String
},
facebookID: {
type: String

},
service: {
  type: String
},
good: {
  type: String
},

googleID: {
type: String
}

});

const User = mongoose.model('User', userSchema);
module.exports = User;
