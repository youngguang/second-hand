var index = require('./index');
var user = require('./user/users')
var login = require('./login/login')


var rountes = module.exports = function(app) {

  // 登录
  app.use('/login', login);

  // 个人信息
  app.use("/user", user);

  // 首页
  app.use("/", index);

}