var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = module.exports = new Schema({
    userId   : {type: String},
    userName : {type: String},
    password : {type: String},
    regTime  : {type: Date, default: Date.now}
});