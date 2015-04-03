var index = require('./index');
var user = require('./user/users')
var login = require('./login/login')


var rountes = module.exports = function(app) {

  app.use(function(req, res, next) {
      if (!req.session.user) {
         res.redirect('../login');
      }
  })

  // 登录
  app.use('/login', login);

  // 个人信息
  app.use("/user", user);

  // 首页
  app.use("/", index);

}