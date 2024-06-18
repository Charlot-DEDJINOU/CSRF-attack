const mongoose = require('../config/moogose');

const cookieSchema = new mongoose.Schema({
  type : { type: String, required: true },
  message : { type: String, required: true },
});

const Cookie = mongoose.model('Cookies', cookieSchema);

module.exports = Cookie;