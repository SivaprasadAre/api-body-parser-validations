var express = require('express'),
router = express.Router();

router.use('/user',require('./userRouter'));
router.use('/client',require('./clientRouter'));

module.exports = router;