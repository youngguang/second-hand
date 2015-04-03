var Config = require('../config')
var mongoose = require('mongoose');

var db =  module.exports = mongoose.cd(Config.mongo_url);

