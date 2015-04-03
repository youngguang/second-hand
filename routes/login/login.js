var express = require('express');
var router = express.Router();
/*var db = require('./../../dao/test');*/

/**
 *  登录入口
 */
router.get('/', function(req, res, next) {
  console.log(req.cookies.cookiename + "----------------------");
  console.log(req.session.id + "..............................................");
  res.render('login/login');
})

/**
 *  登录请求
 */
router.post('/', function(req, res, next) {

})


module.exports = router;
