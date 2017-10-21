const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({

  email: {
  type: String, required: true
},
  username: {
  type: String, required: true
},
password : {
type: String, required: true
},

description: {
type: String, requred: true
},

profession: {
  type: String
},

company: {
type: String

},

facebookID: {
type: String

},
firstname: {
  type: String
},

lastname: {
  type: String
},

pic_path: {
  type: String
},

service: {
  type: String
},
_creator: {
  type:Schema.Types.ObjectId, ref: 'User'
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
