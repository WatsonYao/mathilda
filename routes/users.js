var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('fall in love with u');
});

router.get('/name', function(req, res, next) {
  res.send('');
});

module.exports = router;
