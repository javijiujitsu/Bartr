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

googleID: {
      type: String
    },

service: {
  type: String
},
good: {
  type: String
}
},

{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }

);

const User = mongoose.model('User', userSchema);
module.exports = User;
