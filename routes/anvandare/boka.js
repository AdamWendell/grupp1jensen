var express = require('express');
var router = express.Router();
var BokningModel = require('../../model/BokningModel');
var BilarModel = require('../../model/BilarModel');
var comparer = require('../../helpers/helper').comparer;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./anvandare/boka');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  var sokObj = {};

  if (req.body.biltyp != '-Välj-') {
     sokObj.biltyp = req.body.biltyp;
   }

  if(req.body.dragkrok) {
    sokObj.dragkrok = true;
  }

  if (req.body.drivmedel != '-Välj-' ) {
    sokObj.drivmedel = req.body.drivmedel;
  }

  if (req.body.vaxellada != '-Välj-') {
    sokObj.vaxellada = req.body.vaxellada;
  }

  if (req.body.drivhjul != '-Välj-') {
    sokObj.drivhjul = req.body.drivhjul;
  }
  console.log(sokObj);
  // Hämta alla bilar som matchar sökningen.
  BilarModel.find(sokObj).then((bilar) => {
    BokningModel.find().then( function (bokningar) {
    // Efter det hämta alla bokningar. Som filtrerar så att bara de som krockar med den ansatta tiden.
      var bokade = bokningar.filter((value) => {
        return comparer(Date.parse(value.from), Date.parse(value.tom), Date.parse(req.body.from), Date.parse(req.body.tom))
      }).map((bokning) => {
        return bokning.bil;
      })

      var ejBokade = bilar.filter((bil) => {
        return bokade.indexOf(bil.bil) == -1;
      } )
      var nyBokning = {}
      nyBokning.from = req.body.from;
      nyBokning.tom = req.body.tom;
      nyBokning.typ = req.body.typ;
      // nyBokning.userId = req.param.userId

      res.render('./anvandare/boka', {bilar: ejBokade, nyBokning: nyBokning})
      // Kolla om någon konfliktande bokningar är på bilar som matchar sökningen.
    })
  }, (err) => {})

  // console.log(typeof(req.body.from) + ' ' + typeof(req.body.tom) );
});


router.post('/bokabil', function (req, res, next) {
  req.body.aterlamnad = false;

  BokningModel.create(req.body, (err, savedBokning) => {
    if (err) {
      next(err);
    } else {
      console.log(savedBokning);
      res.render('./anvandare/felanmalan', {thanks: true});
    }
  })

})
module.exports = router;
