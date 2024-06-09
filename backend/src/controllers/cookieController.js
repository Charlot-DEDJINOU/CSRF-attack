const Cookie = require('../models/cookieModel')

exports.store = async (req, res) => {
    try {
      const id = req.query.id
      const session = req.query.session

      const newCookie = new Cookie({
        id : id,
        session : session
      });

      await newCookie.save();
      res.status(201).json({ message: 'Chocolate created successfully'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}