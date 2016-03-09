var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/besiktning', function(req, res, next) {
  res.render('./admin/besiktning', 

  	{
  		
  		model: 'Volvo XC60',
  		drivmedel: 'Diesel',
  		vaxellada: 'Automatic',
  		drivhjul: '4' 

  	});

});

module.exports = router;
