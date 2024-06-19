const mongoose = require('../config/moogose');

const errorSchema = new mongoose.Schema({
    message: String,
    source: String,
    lineno: Number,
    colno: Number,
    error: String,
    userAgent: String,
    url: String,
    referrer: String,
    status: Number,
    statusText: String,
    responseURL: String,
    stack: String,
    xhr: Object,
    timestamp: { type: Date, default: Date.now }
});
  
const ErrorLog = mongoose.model('ErrorLog', errorSchema);

module.exports = ErrorLog;
