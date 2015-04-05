var index = require('./index');

var user = require('./user/users')
var login = require('./login/login')
var reg = require('./login/reg')
var config = require('../config')


var rountes = module.exports = function(app) {

  // 未登录可请求
  var beforeLoginRequests = [index, reg]
  app.use("/", beforeLoginRequests);


  // 登录拦截器
  app.use(function(req, res, next) {
      if (!req.session.user && req.originalUrl != '/login') {
        return res.redirect('/login');
      }
      next();
  })


  // 登录后方可请求
  var afterLoginRequests = [login, user]
  app.use("/", afterLoginRequests);
}