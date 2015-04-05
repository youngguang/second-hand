var express = require('express');
var router = express.Router();

/**
 *  登录入口
 */
router.get('/login', function(req, res, next) {
  if (req.session.user) {
    return res.redirect('/');
  }
  res.render('login/login');
})

/**
 *  登录请求
 */
router.post('/login', function(req, res, next) {
  req.session.user=true;
  return res.redirect('/');
})


/**
 *  退出登录
 */
router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err) {
      res.render('login/login');
    })
})


module.exports = router;
