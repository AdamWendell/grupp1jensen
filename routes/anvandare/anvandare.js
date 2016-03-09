var express = require('express');
var router = express.Router();

/* GET home page. */

router.use(require('./boka'));
router.use(require('./minabokningar'));
router.use(require('./felanmalan'));
router.use(require('./mittkonto'));
router.use(require('./minabokningar'));
router.use(require('./andralosen'));

module.exports = router;
