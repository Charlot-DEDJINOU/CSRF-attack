const mongoose = require('../config/moogose');

const cookieSchema = new mongoose.Schema({
  id : { type: String, required: true },
  session : { type: String, required: true },
});

const Cookie = mongoose.model('Cookies', cookieSchema);

module.exports = Cookie;