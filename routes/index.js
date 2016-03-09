var express = require('express');
var router = express.Router();
var User = require('../model/nyanvmodul');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  User.find({ id: parseInt(req.body.anvnamn)}).then((anvandare) => {
    if (anvandare.length == 1) {
      if (req.body.password == anvandare[0].pwd) {
        if(anvandare[0].admin) {
          res.redirect('/' + anvandare[0].id + '/admin/bilar');
        } else {
          res.redirect('/' + anvandare[0].id + '/anvandare');
        }
      } else {
        res.render('index', {felPw: true});
      }
    } else {
      res.render('index', {felId: true});
    }
  }, (err) => { console.log(err);});

})

module.exports = router;
