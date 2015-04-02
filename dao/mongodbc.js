var Config = require('../config/config')
var mongoose = require('mongoose');

var db =  module.exports = mongoose.createConnection(Config.mongo_url);

