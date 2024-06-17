const Cookie = require('../models/cookieModel')

exports.store = async (req, res) => {
    try {
      const { chocolate } = req.body

      const newCookie = new Cookie({
         chocolate : chocolate
      });

      await newCookie.save();
      res.status(201).json({ message: 'Chocolate created successfully'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}