var index = require('./index');
var user = require('./user/users')


var rountes = module.exports = function(app) {

  // 个人信息
  app.use("/user", user);

  // 首页
  app.use(index);

}