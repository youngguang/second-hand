var express = require('express');
var router = express.Router();
/*var db = require('./../../dao/test');*/


router.get('/', function(req, res, next) {
  res.render('user/user',{ title: 'Express' });
});

module.exports = router;
