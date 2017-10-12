const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const exchangeSchema = new Schema({

  exchangers: {
  type: String  // Change this to Object ID Type
},
  dateofexchange: {
  type: Date
},
  typeofexchange:  {
  type: String,
  enum: ["good", "exchange", "mixed"]
},
acceptexchange: {
  type: Boolean,
}

});

const Exchange = mongoose.model('Exchange', exchangeSchema);

module.exports = Exchange;