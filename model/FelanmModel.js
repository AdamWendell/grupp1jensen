var mongoose = require('mongoose');


var FelanmalanSchema = new mongoose.Schema({
  "bil": {
    type: String,
    required: true,
  },
  "omrade": {
    type: String,
    required: true
  },
  "beskrivning": {
    type: String,
    required: false
  },
  "klar": {
    type: Boolean
  },
  "skapad": {
    type: String
  },
  "fixad": {
    type: String
  }
});


var FelanmalanModel = mongoose.model("Felanmalan", FelanmalanSchema);



module.exports = FelanmalanModel;

// FelanmalanModel.find().then((felanmalningar) => {
//   console.log(felanmalningar.map(elm => {
//     var  obj = {};
//     obj.bil  = elm.bil;
//     obj.omrade = elm.omrade;
//     obj.id = elm.id;
//     obj.beskrivning = elm.beskrivning;
//     return obj;
//   }));
// }, (err) => {});



















// FelanmalanModel.findByIdAndUpdate("56d6c32ffa48c80640e4fdb3", {klar: false}, (err, updated) => {
//   if (err) {
//
//   } else {
//     console.log(updated);
//   }
// });
// FelanmalanModel.findByIdAndUpdate("56d6c3c73c9cabff408a432d", {klar: false}, (err, updated) => {
//   if (err) {
//
//   } else {
//     console.log(updated);
//   }
// });
// FelanmalanModel.findByIdAndUpdate("56d6c4425e01a8344183cefa", {klar: false}, (err, updated) => {
//   if (err) {
//
//   } else {
//     console.log(updated);
//   }
// });
// FelanmalanModel.findByIdAndUpdate("56d6c5a3ffa362d7415c833b", {klar: false}, (err, updated) => {
//   if (err) {
//
//   } else {
//     console.log(updated);
//   }
// });
// FelanmalanModel.findByIdAndUpdate("56d6d24d0cb1e49a48bf3679", {klar: false}, (err, updated) => {
//   if (err) {
//
//   } else {
//     console.log(updated);
//   }
// });
// FelanmalanModel.findByIdAndUpdate("56d6d5191d5e1b0949abea8b", {klar: false}, (err, updated) => {
//   if (err) {
//
//   } else {
//     console.log(updated);
//   }
// });
