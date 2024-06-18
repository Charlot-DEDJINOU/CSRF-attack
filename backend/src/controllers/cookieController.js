const Cookie = require('../models/cookieModel')
const axios = require('axios');

exports.storeError = async (req, res) => {
  try {
    console.log("new error")

    const { error } = req.body

    const newCookie = new Cookie({
      type : "error",
      message : error
    });

    await newCookie.save();
    res.status(201).json({ message: 'Error created successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.storeData = async (req, res) => {
  try {
    console.log("new data")

    const { data } = req.body

    const newCookie = new Cookie({
      type : "data",
      message : data
    });

    await newCookie.save();
    res.status(201).json({ message: 'Data created successfully'});
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