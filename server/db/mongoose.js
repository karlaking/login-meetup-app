process.env.PORT = 3000;
process.env.MONGODB_URI = 'mongodb://localhost:27017/users';

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
