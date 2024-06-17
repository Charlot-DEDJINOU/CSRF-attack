const mongoose = require('../config/moogose');

const cookieSchema = new mongoose.Schema({
  chocolate : { type: String, required: true },
});

const Cookie = mongoose.model('Cookies', cookieSchema);

module.exports = Cookie;