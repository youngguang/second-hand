var express = require('express');
var router = express.Router();
var db = require('./../../dao/test');

/**
 *  登录入口
 */
router.get('/', function(req, res, next) {
  res.render('login/login',{ title: 'Express' });
})

/**
 *  登录请求
 */
router.post('/', function(req, res, next) {

})


module.exports = router;
