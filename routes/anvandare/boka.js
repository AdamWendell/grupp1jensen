var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./anvandare/boka');
});

router.post('/', (req, res, next) => {
  console.log(Date.parse(req.body.from) + ' ' + Date.parse(req.body.tom) );
})
module.exports = router;
