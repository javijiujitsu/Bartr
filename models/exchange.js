const mongoose = require('mongoose');
const User    = require('./user');
const Schema   = mongoose.Schema;

const exchangeSchema = new Schema({

  _exchangeuserid: {
  type: Schema.Types.ObjectId,
   ref: "User" // Change this to Object ID Type
},
  dateofexchange: {
  type: Date
},
  typeofexchange:  {
  type: String,
  enum: ["good", "service", "mixed"]
},
acceptexchange: {
  type: Boolean,
},

description: {
type: String

},

condition: {
type: String

}

});

const Exchange = mongoose.model('Exchange', exchangeSchema);

module.exports = Exchange;
