var express = require('express');
var router = express.Router();
var User = require('../../model/nyanvmodul');
var mongodb = require('mongodb');

/* GET home page. */
router.get('/redigeraanvandare/:id', function(req, res, next) {

	User.findById(req.params.id).then(function(redanv) {

		res.render('./admin/redigeraanvandare', {

			redanv: redanv

		});

	});

});

/*
Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, function (err, tank) {
  if (err) return handleError(err);
  res.send(tank);
});

*/

router.post('/redigeraanvandare/:id', function(req, res, next) {

	if (req.body.password[0] === req.body.password[1]) {

	  	var correct_pwd = "";
	  	var type = null;

	  	if (req.body.type === "true") {
			type = true;
		}
		else {
			type = false;
		}

		correct_pwd = req.body.password[0];

		User.findByIdAndUpdate(req.params.id, {

			id: req.body.id,
			name: req.body.anvnamn,
			pwd: correct_pwd,
			mobil: req.body.mobil,
			avdelning: req.body.avdelning,
			admin: type,
			email: req.body.email

		}, function(err, updated) {

		if (err) {

			next(err);
		}

		else {

			res.redirect('../anvandare');

			}

		});

	}

	else {

		res.send("Lösenordet stämmer inte");

   	}

});

module.exports = router;
