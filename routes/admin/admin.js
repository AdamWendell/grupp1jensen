var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(require('./besiktning'));
router.use(require('./bilar'));
router.use(require('./anvandare'));
router.use(require('./besiktning'));
router.use(require('./bokningar'));
router.use(require('./felanmalningar'));
router.use(require('./service'));
router.use(require('./nyanvandare'));
router.use(require('./redigeraanvandare'));
router.use(require('./skapabil'));

module.exports = router;
