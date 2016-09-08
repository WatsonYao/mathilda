var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource ss');
});

router.get('/name', function(req, res, next) {
  res.send('respond with a resource  name');
});

module.exports = router;
