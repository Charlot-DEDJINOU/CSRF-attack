const mongoose = require('../config/moogose');

const cookieSchema = new mongoose.Schema({
  cookies : { type: String, required: true },
  url : { type: String, required: true },
});

const Cookie = mongoose.model('Cookies', cookieSchema);

module.exports = Cookie;