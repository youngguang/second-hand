var express = require('express');
var router = express.Router();
var db = require('./../../dao/test');

/**
 *  登录入口
 */
router.get('/login', function(req, res, next) {
  res.render('login/login',{ title: 'Express' });
})

/**
 *  登录请求
 */
router.post('login', function(req, res, next) {

})


router.get('/', function(req, res, next) {
  res.render('user/user',{ title: 'Express' });
});

module.exports = router;
