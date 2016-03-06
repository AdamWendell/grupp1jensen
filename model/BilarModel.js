var mongoose = require('mongoose');



var BilSchema = new mongoose.Schema({
  bil: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: String
  },
  bilmarke:{
    type: String
  },
  model: {
    type: String
  },
  regnummer:{
    type: String
  },
  biltyp: {
    type: String,
    required: true
  },
  drivmedel: {
    type: String
  },
  vaxellada: {
    type: String
  },
  dragkrok: {
    type: Boolean
  },
  drivhjul: {
    type: String
  },
  besiktningperiod: [],
  besiktningBokad: Boolean,
  matarstallning: Number
});


var BilModel = mongoose.model("Bilar", BilSchema);



module.exports = BilModel;
