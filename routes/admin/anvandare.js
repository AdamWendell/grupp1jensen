var express = require('express');
var router = express.Router();
var User = require('../../model/nyanvmodul');

/* GET home page. */
router.get('/anvandare', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		var obj = new Object();

		res.render('./admin/anvandare', {

			anvandare: anvandare,
			singel: obj

		});

	}, function(err) {

		console.log(err);

	});

});

router.post('/anvandare/:id', function(req, res, next) {

	User.find( ).then(function(anvandare) {

		var obj = new Object();

		for (i in anvandare) {
			//console.log(anvandare[i].id);

			if (anvandare[i].id==req.params.id) {

				obj._id = anvandare[i]._id;
				obj.name = anvandare[i].name;
				obj.mobil = anvandare[i].mobil;
				obj.avdelning = anvandare[i].avdelning;
				obj.email = anvandare[i].email;
				obj.id = anvandare[i].id;
				obj.timesPrivate = anvandare[i].timesPrivate;

			}
		}

		res.render('./admin/anvandare', {

			anvandare: anvandare,
			singel: obj

		});

	}, function(err) {

		console.log(err);

	});

});

module.exports = router;
