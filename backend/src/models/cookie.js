const mongoose = require('../config/moogose');

const CookieSchema = new mongoose.Schema({
    cookie: { type: String, required: true },
    receivedAt: { type: Date, default: Date.now },
});

const Cookie = mongoose.model('Cookie', CookieSchema);

module.exports = Cookie;