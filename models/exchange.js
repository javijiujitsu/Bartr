const mongoose = require('mongoose');
const User    = require('./user');
const Schema   = mongoose.Schema;

const exchangeSchema = new Schema({

  _exchangeuserid: { type: Schema.Types.ObjectId, ref: "User" // Change this to Object ID Type
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

pic_path: {
  type: String
},

condition: {
type: String
},

},

{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }



);

exchangeSchema.virtual('inputFormattedDate').get(function(){
  return moment(this.dateofexchange).format('YYYY-MM-DD');
});



const Exchange = mongoose.model('Exchange', exchangeSchema);

module.exports = Exchange;
