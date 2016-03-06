var express = require('express');
var router = express.Router();
var BilarModel = require('../../model/BilarModel');


/* GET home page. */
router.get('/bilar', function(req, res, next) {

  BilarModel.find().then((bilar) => {
    res.render('./admin/bilar', {bilar: bilar});
  }, (err) => {});
});

router.post('/bilar', function(req, res, next) {

  BilarModel.find({bil: req.body.sok}.then((bil) => {
    res.render('./admin/bilar', {bilar: bil});
  }, (err) => {}))
})

module.exports = router;


// BilarModel.create( { bil: 'bil2',
//   year: 2016,
//   bilmarke: 'Volvo',
//   model: 'v70',
//   regnummer: 'opa123',
//   biltyp: 'kombi',
//   drivmedel: 'disel',
//   vaxellada: 'automat',
//   dragkrok: true,
//   drivhjul: 'Bakhjul',
//   besiktningperiod: [0, 4],
//   besiktningBokad: false,
//   matarstallning: 1234
// }, (err, savedFelanm) => {
//   if (err) {
//     next(err);
//   } else {
//     res.render('./anvandare/felanmalan', {thanks: true});
//   }
// })
