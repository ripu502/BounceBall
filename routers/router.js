const router = require('express').Router();
const ballHandler = require('../controller/ballHandler');

router.get('/', ballHandler.getData);
router.use('/', ballHandler.badReq);

module.exports = router;
