const mongoose = require('../config/moogose');

const dataSchema = new mongoose.Schema({
  type : { type: String, required: true },
  message : { type: String, required: true },
});

const Data = mongoose.model('Datas', dataSchema);

module.exports = Data;