var express = require('express');
var router = express.Router();
var BilarModel = require('../../model/BilarModel');
var besiktningDates = require('../../helpers/helper').besiktningDates;

/* GET home page. */
router.get('/skapabil', function(req, res, next) {
  res.render('./admin/skapabil');
});

router.post('/skapabil', function (req, res, next) {
  var rb = req.body;
  if(rb.dragkrok == 'ja') {
    rb.dragkrok = true
  } else {
    rb.dragkrok = false
  }
  BilarModel.create({
    bil: rb.bil,
    biltyp: rb.biltyp,
    bilmarke: rb.bilmarke,
    model: rb.model,
    year: rb.year,
    drivhjul: rb.drivhjul,
    vaxellada: rb.vaxellada,
    dragkrok: rb.dragkrok,
    regnummer: rb.regnummer,
    matarstallning: rb.matarstallning,
    besiktningperiod: besiktningDates(rb.regnummer),
    besiktningBokad: false
  }, (err, savedFelanm) => {
    if (err) {
      next(err);
    } else {
      res.render('./admin/skapabil');
    }
  })
})
module.exports = router;
