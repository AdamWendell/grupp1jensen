var express = require('express');
var router = express.Router();
var BokningModel = require('../../model/BokningModel');
var BilarModel = require('../../model/BilarModel');
/* GET home page. */
router.get('/bokningar', function(req, res, next) {
  // Hämta alla bokningar
  BokningModel.find({}).then((bokningar) => {
    // console.log(bokningar);
    // Hämta endast de bilar som är bokade
    BilarModel.find({bil: {$in: bokningar.map( (bokning) => bokning.bil)}}).then((bilar) => {
      console.log(bokningar);
      // Gör arrays där bokningar paras med den bokade bilen.
      var bokBilarr = bokningar.map((bokning, i) => [bokning, bilar.filter( (bil) => bil.bil == bokning.bil)[0]]);
      // Tidigare bokningar är bilar som tom datum har vart eller att bilen är återlämnad
      var tidBok = bokBilarr.filter((bokning) => Date.parse(bokning[0].tom) < Date.now()  || bokning[0].aterlamnad)
      // Kommande bokningar
      var komBok = bokBilarr.filter((bokning) => Date.parse(bokning[0].from) > Date.now() )
      // Aktiva boknningar
      var aktBok = bokBilarr.filter((bokning) => Date.parse(bokning[0].tom) > Date.now() && Date.parse(bokning[0].from) < Date.now() && !bokning[0].aterlamnad )
      console.log('tidBok');
      console.log(tidBok[0][0]);
      console.log('komBok');
      console.log(komBok);
      console.log('aktBok');
      console.log(aktBok);
      res.render('./admin/bokningar', {
          aktBok: aktBok,
          komBok: komBok,
          tidBok: tidBok
        });
    })
  })


});


router.post('/bokningar/:id', function (req, res, next) {
  BokningModel.findByIdAndUpdate(req.params.id, {aterlamnad: true}, (err, updated) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/'+ req.originalUrl.split('/')[1] + '/admin/bokningar')
    }
  });
});


router.post('/bokningar', function (req, res, next) {
  BokningModel.findByIdAndRemove(req.body.id, (err, removed) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/'+ req.originalUrl.split('/')[1] + '/admin/bokningar')
    }
  })
})
module.exports = router;
