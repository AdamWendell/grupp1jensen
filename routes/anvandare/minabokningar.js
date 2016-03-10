var express = require('express');
var router = express.Router();
var BokningModel = require('../../model/BokningModel');
var BilarModel = require('../../model/BilarModel');
/* GET home page. */
router.get('/minabokningar', function(req, res, next) {
  BokningModel.find({user: parseInt(req.originalUrl.split('/')[1])}).then((bokningar) => {
    // console.log(bokningar);
    BilarModel.find({bil: {$in: bokningar.map( (bokning) => bokning.bil)}}).then((bilar) => {
      console.log(bokningar);
      var bokBilarr = bokningar.map((bokning, i) => [bokning, bilar.filter( (bil) => bil.bil == bokning.bil)[0]]);

      var tidBok = bokBilarr.filter((bokning) => Date.parse(bokning[0].tom) < Date.now()  || bokning[0].aterlamnad)
      var komBok = bokBilarr.filter((bokning) => Date.parse(bokning[0].from) > Date.now() )
      var aktBok = bokBilarr.filter((bokning) => Date.parse(bokning[0].tom) > Date.now() && Date.parse(bokning[0].from) < Date.now() && !bokning[0].aterlamnad )
      console.log('tidBok');
      console.log(tidBok);
      console.log('komBok');
      console.log(komBok);
      console.log('aktBok');
      console.log(aktBok);
      res.render('./anvandare/minabokningar', {
          aktBok: aktBok,
          komBok: komBok,
          tidBok: tidBok
        });
    })
  })


});

module.exports = router;
